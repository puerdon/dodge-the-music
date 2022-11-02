const express = require('express');
const http = require('http');
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static('.'))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('noteon', (num) => {
    socket.broadcast.emit('noteon', num);
  });

  socket.on('noteoff', (num) => {
    socket.broadcast.emit('noteoff', num);
  });

  socket.on('player_move', (action) => {
    socket.broadcast.emit('player_move', action);
  });
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});


