const express = require('express');
const server = express();
const projectRouter = require('./projectsRouter')
const actionRouter = require('./actionsRouter')

server.use(express.json());
server.use(logger);
server.use('/projects', projectRouter);
server.use('/actions', actionRouter);

function logger(req, res, next) {
    console.log(`[${new Date().toString()}] ${req.method} to ${req.url} from ${req.get('Origin',)}`)
  
  next();
};

module.exports = server;