const express = require('express');
const cors = require('cors');
require('dotenv').config();

const { createTorneiosTable } = require('./config/database');
const routes = require('./routes/index');

const app = express();
const PORT = 3022;

app.use(cors());
app.use(express.json());

app.use('/api', routes);

app.get('/', (req, res) => {
  res.json({ message: 'PescaPro Backend API está funcionando!' });
});

const startServer = async () => {
  try {
    console.log('Criando tabelas do banco...');
    await createTorneiosTable();
    console.log('Banco configurado com sucesso!');

    app.listen(PORT, '0.0.0.0', () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });

  } catch (error) {
    console.error('Erro ao iniciar servidor:', error);
    process.exit(1);
  }
};

startServer();