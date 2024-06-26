const express = require("express");
const server = express();

const router = require("./routes");

// Middleware para permitir solicitudes CORS
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

// Middleware para parsear cuerpos de solicitudes con formato JSON
server.use(express.json());

// Middleware para agregar "/rickandmorty" antes de cada una de tus rutas
server.use("/rickandmorty", router);

module.exports = server;
