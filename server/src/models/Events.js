const { DataTypes } = require("sequelize");
const { v4: uuidv4 } = require("uuid");
const uuid = uuidv4();

module.exports = (sequelize) => {
  sequelize.define(
    "Events",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      userId: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      activityType: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      eventDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      duration: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      minSizePeople: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      location: {
        type: DataTypes.JSON,
        allowNull: false,
      },
      place: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      minCost: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    {
      paranoid: true,
      timestamps: true,
    }
  );
};
