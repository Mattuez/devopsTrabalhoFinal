const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = 3000;

app.use(express.json()); // Para analisar o corpo das requisições JSON

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
});

app.get('/', (req, res) => {
  const containerId = process.env.HOSTNAME || 'Desconhecido';
  res.send(`Olá do servidor ${containerId}!`);
});

app.get('/nomes', (req, res) => {
  pool.query('SELECT * FROM nomes', (error, results) => {
    if (error) throw error;
    res.json(results);
  });
});

app.post('/nomes', (req, res) => {
  const { nome } = req.body;
  pool.query('INSERT INTO nomes (nome) VALUES (?)', [nome], (error, results) => {
    if (error) throw error;
    res.json({ id: results.insertId, nome });
  });
});

app.delete('/nomes/:id', (req, res) => {
  const id = req.params.id;
  pool.query('DELETE FROM nomes WHERE id = ?', [id], (error, results) => {
    if (error) throw error;
    res.json({ message: 'Nome removido com sucesso' });
  });
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Aplicação rodando em http://localhost:${port}`);
});