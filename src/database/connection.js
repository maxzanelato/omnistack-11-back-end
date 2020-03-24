const knex = require('knex');
const configuration = require('../../knexfile');

// Seleciona a conexão de environment de desenvolvimento em vez de PROD ou HOM
const connection = knex(configuration.development);

module.exports = connection;