const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Chat", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    senderId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    receiverId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    eventId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
  });
};
