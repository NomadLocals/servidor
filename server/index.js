const { conn, ChatPersonal, Users } = require("./src/db.js");
require("dotenv").config();
const {Server} = require('socket.io');
const http = require('http');
const {Op} = require('sequelize')

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
const { createPersonalChat, getPersonalChatsByUsers } = require ('./src/controllers/controllerChatPersonal.js')


io.on("connection", (socket) => {
  console.log(`client connected: ${socket.id}`);

  socket.on("startPersonalChat", async ({ senderId, receiverId }) => {
    const roomName = `${senderId}-${receiverId}`;
    socket.join(roomName);
  });

  socket.on("chatPersonalMessage", async ({ senderId, receiverId, senderUserName, message }) => {
    // console.log(senderId, receiverId, senderUserName, message)
    try {
      
        const chat = await createPersonalChat({ senderId, receiverId, message, senderUserName: senderUserName });
        // console.log(chat)
      
      // Emitir el evento "chatPersonalMessage" con el nuevo mensaje
      const messageData = {
        receiverId: chat.receiverId,
        senderId: chat.senderId,
        senderUserName: chat.senderUserName,
        message: chat.message,
      };
      const roomName = `${senderId}-${receiverId}`;
      io.to(roomName).emit("chatPersonalMessage", messageData);
    } catch (error) {
      console.error(error);
    }
  });

  socket.on('getPersonalMessage', async ({senderId, receiverId}) => {
    const allMessages = await getPersonalChatsByUsers(senderId, receiverId);
    // const historial = {
    //   usuario: allMessages.userName,
    //   message: allMessages.message,
    // }
    socket.emit('getPersonalMessage', allMessages)
    socket.broadcast.emit('getPersonalMessage', allMessages)
  })



  socket.on("chatEventMessage", async ({ userName,eventId, senderId, message }) => {
    const newEventChat = await createEventChat({userName ,eventId, senderId, message });
    const user = await Users.findByPk(senderId);
    const dataToSend = {
    usuario: user.userName, // Asegúrate de que userName sea la propiedad correcta en tu modelo de usuario
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
    // socket.broadcast.emit("getMessagesEvent", allMessages)
  })
});
  
  
  
  
conn.sync({ force: true }).then(() => {
  console.log("Base de datos conectada");
  // io.listen(3001, () => {
  //   console.log(`Servidor iniciado en ${PORT}`);
  // });
});