const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL || 'postgresql://admin:admin123@localhost:5432/pescapro',
});

const waitForDatabase = async (maxRetries = 15, delay = 2000) => {
  for (let i = 0; i < maxRetries; i++) {
    try {
      const client = await pool.connect();
      client.release();
      return true;
    } catch (error) {
      if (i === maxRetries - 1) {
        throw new Error(`Falha ao conectar após ${maxRetries} tentativas: ${error.message}`);
      }
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
};

const createTorneiosTable = async () => {
  const query = `
    CREATE TABLE IF NOT EXISTS torneios (
      id SERIAL PRIMARY KEY,
      nome_torneio VARCHAR(255) NOT NULL,
      data_evento DATE NOT NULL,
      maximo_participantes INTEGER NOT NULL,
      local_evento VARCHAR(500) NOT NULL,
      premiacao VARCHAR(500),
      descricao_evento TEXT,
      email_contato VARCHAR(255) NOT NULL,
      telefone VARCHAR(20),
      status VARCHAR(20) DEFAULT 'pendente' CHECK (status IN ('pendente', 'aprovado', 'rejeitado')),
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `;

  try {
    await waitForDatabase();

    await pool.query(query);

    const checkTable = await pool.query(`
      SELECT table_name
      FROM information_schema.tables
      WHERE table_schema = 'public' AND table_name = 'torneios'
    `);

    if (checkTable.rows.length > 0) {
      console.log('Tabela torneios confirmada no banco!');
    } else {
      console.log('Tabela torneios não foi encontrada!');
    }

  } catch (error) {
    console.error('Erro ao criar tabela torneios:', error.message);
    throw error;
  }
};

module.exports = { pool, createTorneiosTable };