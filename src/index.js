// Fachada HTTP Rest Controller
const express = require("express");
// Importação do cors
const cors = require('cors');
// Importa o arquivo de rotas HTTP
const routes = require("./routes");

// Instancia o express
const app = express();

// Diz ao express que o body será em formato json
app.use(express.json());
// Diz que a aplicação tem que utilizar cors
app.use(cors());
// Diz para usar aquele arquivo de rotas
app.use(routes);

// Ouvir na porta 3333
app.listen(3333);