const { conn, Users } = require("./src/db.js");
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



// chat socket.io
const {createEventChat, getEventChatsByEvent } = require ('./src/controllers/controllerChatEvent.js')

io.on("connection", (socket) => {
  console.log(`client connected: ${socket.id}`);

  // socket.on("joinPersonalChat", (receiverId) => {
  //   const roomName = `${socket.id}-${receiverId}`;
  //   socket.join(roomName);
  // });

  // socket.on("chatPersonalMessage", (data) => {
  //   console.log(data)
  //   const message = `${data.message}`;
  //   const messageData = {
  //     senderId: data.senderId,
  //     senderUsername: data.senderUsername,
  //     message: message,
  //   };
  //   const roomName = `${data.senderId}-${data.receiverId}`;
  //   socket.to(roomName).emit("chatPersonalMessage", messageData);
  // });

  socket.on("chatEventMessage", async ({ eventId, senderId, message }) => {
    const newEventChat = await createEventChat({ eventId, senderId, message });
    const user = await Users.findByPk(senderId);
    const dataToSend = {
    usuario: user.userName, // Asegúrate de que userName sea la propiedad correcta en tu modelo de usuario
    message: newEventChat.message,
  };

    io.sockets.in(eventId).emit("chatEventMessage", dataToSend);
    socket.broadcast.emit("chatEventMessage", dataToSend);
  });
});


conn.sync({ force: true }).then(() => {
  console.log("Base de datos conectada");
  // io.listen(3001, () => {
  //   console.log(`Servidor iniciado en ${PORT}`);
  // });
});


