// const axios = require("axios");
// const server = require("./src/server");
// const { conn } = require("./src/db.js");
// const PORT = 3001;

// conn
//   .sync({ force: false })
//   .then(() => {
//     server.listen(PORT, () => {
//       console.log(`Server listening on port ${PORT}`);
//     });
//   })
//   .catch((error) => console.error(error));

const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const router = require("./src/routes");
const morgan = require("morgan");
const cors = require("cors");
const { conn } = require("./src/db.js");
const PORT = 3001
const server = express();
const httpServer = http.createServer(server);
const io = socketIo(httpServer, {
  cors: {
    origin: "*",
  },
});

// Configuración de Clerk
// const clerk = new Clerk(process.env.CLERK_SECRET_KEY);

server.use(morgan("dev"));
server.use(express.json());
server.use(cors());

server.use(router);

conn.sync({ force: true }).then(() => {
  console.log("Base de datos conectada");
  httpServer.listen(PORT, () => {
    console.log(`Servidor para chat iniciado en el ${PORT}`);
  });
});

// Configuración de Socket.io
io.on("connection", (socket) => {
  console.log("Se creo un usuario");

  socket.on("chat message", (data) => {
    io.emit("chat message", data);
  });

  // socket.on("ping", (count) => {
  //   console.log(count);
  // });
});
