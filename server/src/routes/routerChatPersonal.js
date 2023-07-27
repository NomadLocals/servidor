const { Router } = require("express");
const io = require('../../index.js')
const {
    getPersonalChatsByUsers,
    createPersonalChat
} = require("../controllers/controllerChatPersonal.js");


const router = Router();

router.post("/", async (req, res) => {
const { senderUserName, message } = req.body;


const users = roomName.split('-')
  
  const senderId= users[0];
  const receiverId= users[1];

const id = roomName
try {
    if ( 
        !senderId ||
        !receiverId ||
        !senderUserName
         ) {
    throw Error("Falta información para crear el chat personal.");
    }
    
   
    const newPersonalChat = await createPersonalChat({
      id,
    senderId,
    receiverId,
    message,
    senderUserName
    });
    
    sockets.to(roomName).emit("chatPersonalMessage", newPersonalChat);

    return res.status(200).json(newPersonalChat);
} catch (error) {
    console.log(error);
    return res
    .status(500)
    .json({ message: "Error al crear el chat personal." });
}
});

router.get("/:roomName", async (req, res) => {
    const  roomName  = req.params.roomName; 
    console.log(req.params.roomName);
    const users = roomName.split("-");
    console.log(users)
    // const senderId = users[0]
    // const receiverId = users [1]

    // console.log(senderId)
    // console.log(receiverId)

    try {
      if (!roomName) {
        throw Error("Falta información para obtener el chat personal.");
      }
      
        const personalChats = await getPersonalChatsByUsers(roomName);
        console.log(personalChats);
        return res.status(200).json(personalChats);      
      } catch (error) {
        console.log(error);
        return res
        .status(500)
        .json({ message: "Error al obtener los chats personales." });
      }
  });

module.exports = router;