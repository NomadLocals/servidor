const { Router } = require("express");

const {
  createEventChat,
  getEventChatsByEvent,
} = require("../controllers/controllerChatEvent.js");

const io = require('../../index.js')
const router = Router();


router.post("/:eventId/chat/event", async (req, res) => {
  const { eventId } = req.params;
  const { userName,senderId, message } = req.body;

  try {
    if ( !senderId || !message) {
      throw Error("Falta información para crear el chat de evento.");
    }

    const newEventChat = await createEventChat({
      eventId,
      senderId,
      message,
      userName
    });

    io.sockets.in(eventId).emit("chatEventMessage", newEventChat);

    return res.status(200).json(newEventChat);
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: "Error al crear el chat de evento." });
  }
});

// Obtiene todos los mensajes de chat de evento para un evento específico
router.get("/:eventId/chat/event", async (req, res) => {
  const { eventId } = req.params;
  try {
    const eventChats = await getEventChatsByEvent(eventId);

    return res.status(200).json(eventChats);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error al obtener los chats de evento." });
  }
});

module.exports = router;