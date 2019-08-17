const express = require('express');
const projectRouter = require("./data/helpers/projectModel.js")
const server = express();

server.use(express.json());
server.use(logger);
server.use('/projects', projectRouter);

server.get('/', (req, res) => {
    res.send(`<h2>This is gonna be exciting.</h2>`)
  });

function logger(req, res, next) {
    console.log(`[${new Date().toString()}] ${req.method} to ${req.url} from ${req.get('Origin',)}`)
  
  next();
};

module.exports = server;