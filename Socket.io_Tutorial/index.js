const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const path = require('path')
const { Server } = require("socket.io");

app.use(express.static(path.resolve("./public")))

const io = new Server(server)

io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
      io.emit('chat message', msg); 
    });
});

app.get('/', (req, res) => {
//   res.send('<h1>Hello world</h1>');
    res.sendFile("/public/index.html")
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});