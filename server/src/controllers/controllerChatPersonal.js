const { ChatPersonal, Users, Events } = require("../db.js");
const { Sequelize, Op } = require('sequelize');
const shortid = require("shortid");

const createPersonalChat = async ({
    senderId,
    receiverId,
    message,
    chatId,
  }) => {
    try {
      // Crear el chat personal con los datos proporcionados
      const chatPersonal = await ChatPersonal.create({
        id: chatId,
        message: message,
        senderId: senderId,
        receiverId: receiverId,
      });
  
      // Asociar el chat personal con los usuarios correspondientes
      await chatPersonal.setSender(senderId);
      await chatPersonal.setReceiver(receiverId);
    
  
      // Emitir el evento de Socket.IO para notificar sobre el nuevo chat personal
      // io.to(senderId).emit("personalChat", chatPersonal);
      // io.to(receiverId).emit("personalChat", chatPersonal);
  
      return chatPersonal;
    } catch (error) {
      console.error(error);
    }
  };
  
  // const getPersonalChats = async (senderId, receiverId) => {
  //   try {
  //     const chats = await ChatPersonal.findAll({
  //       where: { senderId, receiverId },
  //       include: [
  //         { model: Users, as: "sender", attributes: ["id", "userName"] },
  //         { model: Users, as: "receiver", attributes: ["id", "userName"] },
  //       ],
  //     });
  
  //     return chats;
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const startChatPersonal = async ({senderId, receiverId}) => {
    console.log(senderId)
    console.log(receiverId)
    try {
      // Verificar si ya existe un chat personal entre los dos usuarios
      const existingChat = await ChatPersonal.findOne({
        where: {
          senderId: senderId,
          receiverId: receiverId,
          [Op.or]: [
            { senderId: senderId, receiverId: receiverId },
            { senderId: receiverId, receiverId: senderId },
          ],
        },
        include: [
          { model: Users, as: "sender", attributes: ["id", "userName"] },
          { model: Users, as: "receiver", attributes: ["id", "userName"] },
        ],
      });
  
      if (existingChat) {
        console.log(existingChat)
        return existingChat;
      } else {
        // Si no existe un chat, crear uno nuevo
        const newChat = await createPersonalChat({
          senderId: senderId,
        receiverId: receiverId,
        message: "", // Puedes inicializar el chat sin mensajes o con un mensaje predeterminado si lo deseas
      });
      
      return newChat;
    }
    } catch (error) {
      console.log(error.message);
      throw error; // Debes propagar el error para que se maneje en el controlador de la ruta
    }
  };

module.exports = {
    startChatPersonal,
    // getPersonalChats,
    startChatPersonal
}