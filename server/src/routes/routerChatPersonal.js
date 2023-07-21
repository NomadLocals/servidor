const { Router } = require("express");

const {
    createPersonalChat,
    getPersonalChatsByEvent
} = require("../controllers/controllerChatPersonal.js");

const io = require("../../index.js");

const router = Router();


router.post("/:eventId/chat/personal", async (req, res) => {
const { eventId } = req.params;
const { chatId, senderId, receiverId, message } = req.body;

try {
    if (!eventId || !senderId || !receiverId || !message) {
    throw Error("Falta información para crear el chat personal.");
    }

    const newPersonalChat = await createPersonalChat({
    eventId,
    senderId,
    receiverId,
    message,
    chatId,
    });

    return res.status(200).json(newPersonalChat);
} catch (error) {
    console.log(error);
    return res
    .status(500)
    .json({ message: "Error al crear el chat personal." });
}
});

router.get("/:eventId/chat/personal", async (req, res) => {
const { eventId } = req.params;
try {
    const personalChats = await getPersonalChatsByEvent(eventId);

    return res.status(200).json(personalChats);
} catch (error) {
    console.log(error);
    return res
    .status(500)
    .json({ message: "Error al obtener los chats personales." });
}
});

module.exports = router;