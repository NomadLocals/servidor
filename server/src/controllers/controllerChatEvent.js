const { ChatEvent, Events } = require("../db");

const createEventChat = async ({ eventId, senderId, message, userName }) => {
  
  const newEventChat = await ChatEvent.create({
    senderId,
    message,
    userName
  })

  await newEventChat.setEvent(eventId)

  return newEventChat;
};


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