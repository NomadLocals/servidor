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
const { createPersonalChat, getPersonalChatsByEvent } = require ('./src/controllers/controllerChatPersonal.js')
io.on("connection", (socket) => {
  console.log(`client connected: ${socket.id}`);

  // socket.on("startPersonalChat", async ({userName, senderId, receiverId}) => {
  //   console.log(senderId)
  //   console.log(receiverId)
  //   try {
  //         const newPersonalChat = await startChatPersonal({
  //           message,
  //           senderId,
  //           receiverId,
  //           senderUserName
  //         });
          
    
  //         // Emite el evento "personalChatCreated" con el nuevo chat personal (incluyendo mensajes)
  //         io.to(senderId).emit("personalChatCreated", newPersonalChat);
  //         io.to(receiverId).emit("personalChatCreated", newPersonalChat);
  //       } catch (error) {
  //         console.error(error);
  //       }
  // });

  socket.on("chatPersonalMessage", async ({senderId, receiverId, senderUserName, message}) => {

    const newPersonalChat = await createPersonalChat({senderId, receiverId, senderUserName, message})

    const user = await Users.findByPk(senderId)
    // const message = `${message}`;
    const messageData = {
      senderId: senderId,
      senderUsername: senderUserName,
      message: message,
      receiverId
    };
    const roomName = `${senderId}-${receiverId}`;
    socket.to(roomName).emit("chatPersonalMessage", messageData);
  });


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
  
  
conn.sync({ force: false }).then(() => {
  console.log("Base de datos conectada");
  // io.listen(3001, () => {
  //   console.log(`Servidor iniciado en ${PORT}`);
  // });
});


