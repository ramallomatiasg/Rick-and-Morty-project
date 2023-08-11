// const fs = require("fs");
// const http = require("http");
// const { getCharById } = require("./controllers/getCharById");
// const PORT = 3001;

// http
//   .createServer((req, res) => {
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     console.log(`Servidor iniciado en puerto ${PORT}`);
//     const { url } = req;
//     if (url.startsWith("/rickandmorty/character/")) {
//       const id = parseInt(url.split("/").pop());
//       getCharById(res, id);
//     }
//   })
//   .listen(PORT, "localhost");

const express = require('express');
const cors = require('cors')
const server = express();
const PORT = 3001;
const routes = require('./routes/index')

// Middleware para permitir CORS
server.use(cors())

// Middleware para parsear el body en formato JSON
server.use(express.json())
// Middleware para agregar "/rickandmorty" antes de las rutas
server.use('/rickandmorty', routes);


server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.header(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, DELETE'
  );
  next();
});

server.listen(PORT, () => {
  console.log('Server raised in port: ' + PORT);
});