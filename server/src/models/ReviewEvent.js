const { DataTypes } = require("sequelize");
const { v4: uuidv4 } = require("uuid");
const uuid = uuidv4();

module.exports = (sequelize) => {
  sequelize.define(
    "ReviewEvent",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      type: {
        type: DataTypes.ENUM("Scam", "Breach of Contract", "Violence", "other"),
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      //id del user que hace el reporte
      UserNameUserReview: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { paranoid: true },
    { timestamps: true }
  );
};
