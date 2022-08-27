const express = require('express');
const http = require('http');

const appConfig = require('./app.js');
const port = 3000;
let app = express();

const httpServer = http.createServer(app);
appConfig(app);
httpServer.listen(port, ()=> {
    console.log('Server port is 3000');
});