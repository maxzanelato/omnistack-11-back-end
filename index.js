// Fachada HTTP Rest Controller
const express = require("express");

// Instancia o express
const app = express();

// Adiciona uma rota get
app.get("/", (request, response) => {
  return response.json({
    evento: "Semana Omnistack 11.0",
    aluno: "Max Zanelato"
  });
});

// Ouvir na porta 3333
app.listen(3333);
