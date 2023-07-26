const { DataTypes } = require("sequelize");
const { v4: uuidv4 } = require("uuid");
const uuid = uuidv4();

module.exports = (sequelize) => {
    sequelize.define("ChatPersonal", {
        id: {
            type: DataTypes.STRING,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        senderId: {  // Nueva columna
            type: DataTypes.STRING,
            allowNull: false,
        },
        receiverId: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        message: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        roomName: {
            type: DataTypes.TEXT,
            alowwNull: false
        }
    },
    {
        paranoid: true,
        timestamps: true,
    });
};