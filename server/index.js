const { conn, Users } = require("./src/db.js");
require("dotenv").config();
const {Server} = require('socket.io');

const server = require('./src/server.js');
const PORT = 3001
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
const { createPersonalChat, getPersonalChatsByUsers } = require ('./src/controllers/controllerChatPersonal.js')


io.on("connection", (socket) => {


  console.log(`client connected: ${socket.id}`);

  socket.on("startPersonalChat", async (roomName) => {
    socket.join(roomName);
  });
  
  socket.on("joinPersonalChat", (roomName) => {
    socket.join(roomName);
  });

  socket.on('getPersonalMessage', async (roomName) => {
    const allMessages = await getPersonalChatsByUsers(roomName);
    const historial = {
      usuario: allMessages.userName,
      message: allMessages.message,
    }
    socket.emit('getPersonalMessage', historial)
  })

  socket.on("chatPersonalMessage", async ({senderId, receiverId, senderUserName, message}) => {
    const newPersonalChat = await createPersonalChat({senderId, receiverId, senderUserName, message})
    const user = await Users.findByPk(senderId)
    const messageData = {
      senderId: senderId,
      senderUsername: senderUserName,
      message: message,
      receiverId: receiverId
    };
    const roomName = [senderId, receiverId].sort().join("-");
    io.to(roomName).emit("chatPersonalMessage", messageData);
  });


  socket.on("chatEventMessage", async ({ userName,eventId, senderId, message }) => {
    const newEventChat = await createEventChat({userName ,eventId, senderId, message });
    const user = await Users.findByPk(senderId);
    const dataToSend = {
    usuario: user.userName, 
    message: newEventChat.message,
    userName: user.userName,
    senderId: user.id
  };
    socket.emit("chatEventMessage", dataToSend);
    socket.broadcast.emit("chatEventMessage", dataToSend);
  });
  
  socket.on('getMessagesEvent', async (eventId) => {
    const allMessages = await getEventChatsByEvent(eventId)
    const historial = {
      usuario: allMessages.userName,
      message : allMessages.message
    }  
    socket.emit('getMessagesEvent', historial);
  })
});
  
  
  
  
conn.sync({ force: true }).then(() => {
  console.log("Base de datos conectada");
});