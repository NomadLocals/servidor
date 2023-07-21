const http = require("http");
const socketIo = require("socket.io");

const initSocketServer = (server) => {
  const httpServer = http.createServer(server);
  const io = socketIo(httpServer, {
    cors: {
      origin: "*",
    },
  });

  io.on("connection", (socket) => {
    console.log("Se creo un usuario", socket.id);

    socket.on("chat message", (data) => {
      io.emit("chat message", data);
    });
  });

  return io;
};

module.exports = initSocketServer;