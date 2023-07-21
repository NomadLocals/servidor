const { ChatPersonal, Users, Events } = require("../db.js");
const { Sequelize, Op } = require('sequelize');
const shortid = require("shortid");

const createPersonalChat = async ({
    eventId,
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
        eventId: eventId,
        senderId: senderId,
        receiverId: receiverId,
      });
  
      // Asociar el chat personal con los usuarios correspondientes
      await chatPersonal.setSender(senderId);
      await chatPersonal.setReceiver(receiverId);
  
      // Asociar el chat personal con el evento correspondiente
      const existingEvent = await Events.findByPk(eventId);
      await existingEvent.addChatPersonal(chatPersonal);
  
      // Emitir el evento de Socket.IO para notificar sobre el nuevo chat personal
    //   io.to(senderId).emit("personalChat", chatPersonal);
    //   io.to(receiverId).emit("personalChat", chatPersonal);
  
      return chatPersonal;
    } catch (error) {
      console.error(error);
    }
  };
  
  const getPersonalChatsByEvent = async (eventId) => {
    try {
      const chats = await ChatPersonal.findAll({
        where: { eventId },
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
    createPersonalChat,
    getPersonalChatsByEvent
}