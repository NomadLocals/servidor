const { ChatPersonal, Users, Events } = require("../db.js");
const { Op } = require('sequelize');


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
  
      return chatPersonal;
    } catch (error) {
      console.error(error);
    }
  };

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

  const getPersonalChatsByUsers = async (senderId, receiverId) => {
    try {
      const chats = await ChatPersonal.findAll({
        where: {
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
  
      return chats;
    } catch (error) {
      console.error(error);
    }
  };

module.exports = {
    startChatPersonal,
    getPersonalChatsByUsers,
    createPersonalChat
}