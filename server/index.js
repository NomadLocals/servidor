const { conn } = require("./src/db.js");
require("dotenv").config();
const {Server} = require('socket.io');
const http = require('http');

const server = require('./src/server.js');
const PORT = 3001

// const app = http.createServer(server);
const app = server.listen(PORT, () => {
  console.log(`Servidor iniciado en ${PORT}`);
});
const io  = new Server(app, {
  cors: {
    origin: '*',
  }
})

io.on('connection', socket => {
    console.log('client connected');
    
    socket.on('chatEventMessage' , (data) => {
      socket.broadcast.emit('chatEventMessage', data)
    })
  })




conn.sync({ force: true }).then(() => {
  console.log("Base de datos conectada");
  // io.listen(3001, () => {
  //   console.log(`Servidor iniciado en ${PORT}`);
  // });
  io.listen(app);
});


