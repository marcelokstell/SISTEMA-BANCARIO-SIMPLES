const express = require('express');
const contas = require('./Controladores/clientes')

const rotas = express();

rotas.get('/contas', contas.listarContas);
rotas.post('/contas', contas.cadastrarConta);
rotas.put('/contas/:numero', contas.atualizarConta);
rotas.patch('/contas/:numero/nome', contas.atualizarDadosConta);

module.exports = rotas;