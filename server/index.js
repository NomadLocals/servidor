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
// importaciones para la documentacion de la api
const path = require("path");
const marked = require('marked-gfm-heading-id');
const { parse } = require('marked');
// para la documentacion de la api
const fs = require('fs');

// importaciones para la documentacion de la api
const path = require("path");
const marked = require('marked-gfm-heading-id');
const { parse } = require('marked');
// para la documentacion de la api
const fs = require('fs');

server.get('/', (req, res) => {
  const filePath = path.join(__dirname, 'public', 'README.md');
  
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Error interno del servidor');
    }
    
    const htmlContent = parse(data);
    res.send(`
    <!DOCTYPE html>
    <html>
    <head>
    <title>Documentación API</title>
    <style>
    body {
      background-color: black;
      color: #CCCCCC;
      font-family: 'Arial', sans-serif;
      font-size: 18px;
      text-align: justify;
    }
    h1, h2, h3, h4, h5, h6 {
      text-align: center;
    }
    img {
      position: relative;
      left: 20%;
    }
    </style>
    </head>
    <body>
    ${htmlContent}
    </body>
    </html>
    `);
  });
});
// importaciones para la documentacion de la api

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