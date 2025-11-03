const { pool } = require('../config/database');

const getAllTorneios = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM torneios ORDER BY created_at DESC');
    res.json(result.rows);
  } catch (error) {
    console.error('Erro ao buscar torneios:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
};

const getTorneioById = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query('SELECT * FROM torneios WHERE id = $1', [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Torneio não encontrado' });
    }
    res.json(result.rows[0]);
  } catch (error) {
    console.error('Erro ao buscar torneio:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
};

const createTorneio = async (req, res) => {
  const {
    nome_torneio,
    data_evento,
    maximo_participantes,
    local_evento,
    premiacao,
    descricao_evento,
    email_contato,
    telefone
  } = req.body;

  try {
    const query = `
      INSERT INTO torneios (
        nome_torneio, data_evento, maximo_participantes,
        local_evento, premiacao, descricao_evento,
        email_contato, telefone
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
      RETURNING *
    `;

    const values = [
      nome_torneio,
      data_evento,
      maximo_participantes,
      local_evento,
      premiacao,
      descricao_evento,
      email_contato,
      telefone
    ];

    const result = await pool.query(query, values);
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Erro ao criar torneio:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
};

const updateTorneioStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  if (!['pendente', 'aprovado', 'rejeitado'].includes(status)) {
    return res.status(400).json({ error: 'Status inválido' });
  }

  try {
    const query = `
      UPDATE torneios
      SET status = $1, updated_at = CURRENT_TIMESTAMP
      WHERE id = $2
      RETURNING *
    `;

    const result = await pool.query(query, [status, id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Torneio não encontrado' });
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.error('Erro ao atualizar status do torneio:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
};

const deleteTorneio = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query('DELETE FROM torneios WHERE id = $1 RETURNING *', [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Torneio não encontrado' });
    }

    res.json({ message: 'Torneio deletado com sucesso' });
  } catch (error) {
    console.error('Erro ao deletar torneio:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
};

module.exports = {
  getAllTorneios,
  getTorneioById,
  createTorneio,
  updateTorneioStatus,
  deleteTorneio
};