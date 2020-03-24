const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

// Adiciona uma rotas de escuta

// Rota de login
routes.post('/sessions', SessionController.create);

// Rota para listar todas as ongs
routes.get('/ongs', OngController.listAll);
// Rota para criar uma ong
routes.post('/ongs', OngController.create);

// Rota para listar todas as incidências
routes.get('/incidents', IncidentController.listAll)
// Rota para criar um incident
routes.post('/incidents', IncidentController.create);
// Rota para deletar
routes.delete('/incidents/:id', IncidentController.delete);

// Rota para lista um profile específico
routes.get('/profiles', ProfileController.find);

module.exports = routes;