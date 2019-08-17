const express = require('express');
const projectRouter = require("./projects/projectsRouter.js")
const server = express();

server.use(express.json());
server.use('/projects', projectRouter);

server.get('/', (req, res) => {
    res.send(`<h2>This is gonna be exciting.</h2>`)
  });

module.exports = server;