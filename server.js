const express = require('express');
const server = express();
const projectsRouter = require('./router/projectsRouter');

server.use(express.json());
server.use('/api', projectsRouter);

module.exports = server;
