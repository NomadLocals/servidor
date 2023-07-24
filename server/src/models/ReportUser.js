
const { DataTypes } = require("sequelize");
const { v4: uuidv4 } = require("uuid");
const uuid = uuidv4();

module.exports = (sequelize) => {
  sequelize.define(
    "ReportUser",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      // id de quien reporta
      idUserReporter: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { paranoid: true },
    { timestamps: true }
  );
};
