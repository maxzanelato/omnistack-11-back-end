// Fachada HTTP Rest Controller
const express = require("express");

// Instancia o express
const app = express();
// Diz ao express que o body será em formato json
app.use(express.json());

// Adiciona uma rota get
app.get("/users", (request, response) => {
  return response.json({
    evento: "Semana Omnistack 11.0",
    aluno: "Max Zanelato"
  });
});

// Ouvir na porta 3333
app.listen(3333);
