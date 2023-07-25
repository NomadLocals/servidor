const { Router } = require("express");

const {
    startChatPersonal,
    getPersonalChats,
    createPersonalChat
} = require("../controllers/controllerChatPersonal.js");


const router = Router();

// router.post('/chat/personal', async (req, res) => {
//     const { senderId, receiverId } = req.body
//     try {
//         const newChat = await startChatPersonal( senderId, receiverId);
//     return res.status(200).json(newChat);
//     } catch (error) {
//         console.log(error.message);
//         return res.status(500).json({ message: "Error al iniciar el chat personal." });
//     }
// })

router.post("/", async (req, res) => {
const { senderId, receiverId, message } = req.body;
try {
    if (  !senderId || !receiverId) {
    throw Error("Falta información para crear el chat personal.");
    }

    const newPersonalChat = await createPersonalChat({
    senderId,
    receiverId,
    message,
    senderUserName
    });

    return res.status(200).json(newPersonalChat);
} catch (error) {
    console.log(error);
    return res
    .status(500)
    .json({ message: "Error al crear el chat personal." });
}
});

router.get("/", async (req, res) => {
    const { senderId, receiverId } = req.query; // Use query parameters for GET request
    try {
      if (!senderId || !receiverId) {
        throw Error("Falta información para obtener el chat personal.");
      }
  
      const personalChats = await getPersonalChatsByUsers(senderId, receiverId);
  
      return res.status(200).json(personalChats);
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .json({ message: "Error al obtener los chats personales." });
    }
  });

module.exports = router;