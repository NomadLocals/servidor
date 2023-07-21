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
require("dotenv").config();

const server = express();
const httpServer = http.createServer(server);

// Configuración de Clerk
// const clerk = new Clerk(process.env.CLERK_SECRET_KEY);

server.use(morgan("dev"));
server.use(express.json());
server.use(cors());

server.use(router);

//cors
server.use(
  cors({
    origin: "*",
    credentials: true,
    allowedHeaders: [
      'Origin',
      'X-Requested-With',
      'Content-Type',
      'Accept',
      'authorization',
    ],
  })
  );

  server.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
  });

  const io = socketIo(httpServer, {
  pingTimeout: 10000,
    cors: {
      origin:"http://localhost:5173",
    },
  });


  // server.use((req, res, next) => {
    //   res.header("Access-Control-Allow-Origin", ""); // update to match the domain you will make the request from
    //   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
//   next();
// });

conn.sync({ force: true }).then(() => {
  console.log("Base de datos conectada");
  httpServer.listen(3001, () => {
    console.log(`Servidor para chat iniciado en http://localhost:3001`);
  });
});

// Configuración de Socket.io
io.on("connect", (socket) => {
  console.log("Se creo un usuario");


  socket.on("chat message", (data) => {
    io.emit("chat message", data);
  });

  // socket.on("ping", (count) => {
  //   console.log(count);
  // });
});
