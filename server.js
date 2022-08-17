const express = require('express');
const http = require('http');
const port = 3000;
let app = express();
const httpServer = http.createServer(app);
httpServer.listen(port, ()=> {
    console.log("Hello");
});