const { ChatPersonal, Users } = require("../db.js");
const { Op } = require('sequelize');


const createPersonalChat = async ({
    senderId,
    receiverId,
    message,
    senderUserName
  }) => {
    try {
      // Crear el chat personal con los datos proporcionados
      const chatPersonal = await ChatPersonal.create({
        senderId,
        receiverId ,
        message,
        senderUserName
      });
      
      return chatPersonal;
    } catch (error) {
      res.status(500).json({error: 'Error de servidor'});
    }
  };


  const getPersonalChatsByUsers = async (roomName) => {
    const users = roomName.split('-')
    const senderId= users[0];
    const receiverId= users[1];
    try {
      const chats = await ChatPersonal.findAll({
        where: {
          [Op.or]: [
            { senderId: senderId, receiverId: receiverId },
            { senderId: receiverId, receiverId: senderId },
          ],
        },
        include: [
          { model: Users, as: "sender", attributes: ["userName"] },
          { model: Users, as: "receiver", attributes: ["userName"] },
        ],
      });
        console.log(chats)
      return chats;
    } catch (error) {
      console.error(error);
    }
  };

module.exports = {
    getPersonalChatsByUsers,
    createPersonalChat
}