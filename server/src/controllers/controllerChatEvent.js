const { ChatEvent, Events } = require("../db");

// Crea un nuevo mensaje de chat de evento
const createEventChat = async ({ eventId, senderId, message }) => {
  // console.log(eventId, senderId, message)
  
  const newEventChat = await ChatEvent.create({
    senderId,
    message,
  })

  await newEventChat.setEvent(eventId)

  // await Events.findByPk(eventId).then((event) => {
  //   return newEventChat.setEvent(event);
  // });
  console.log(newEventChat)
  return newEventChat;
};

// Obtiene todos los mensajes de chat de evento para un evento específico
const getEventChatsByEvent = async (eventId) => {
  const eventChats = await ChatEvent.findAll({
    where: { eventId },
    order: [["createdAt", "ASC"]],
  });
  return eventChats;
};

module.exports = {
  createEventChat,
  getEventChatsByEvent,
};