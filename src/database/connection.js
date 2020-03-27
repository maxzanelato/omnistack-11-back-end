const knex = require("knex");
const configuration = require("../../knexfile");

const config =
  process.env.NODE_ENV === "test"
    ? configuration.test
    : configuration.development;

// Seleciona a conexão de environment de desenvolvimento em vez de PROD ou HOM
const connection = knex(config);

module.exports = connection;
