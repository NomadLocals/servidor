require("dotenv").config();
const { Sequelize } = require("sequelize");

const fs = require("fs");
const path = require("path");

const { DB_USER, DB_PASSWORD, DB_HOST, DB_RENDER } = process.env;

// !! este sequelize es para trabajar en produccion... cuando hay que modificar cosa en la DB

// const sequelize = new Sequelize(
//   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/nomadlocals`,
//   {
//     logging: false,
//     native: false,
//   }
// );

//! este sequelize es para RENDERIZADO... DEPLOY DB en render.s.

const sequelize = new Sequelize(DB_RENDER, {
  logging: false,
  native: false,
  dialectOptions: {
    ssl: true, // Deshabilitar la conexión SSL/TLS
  },
});

const basename = path.basename(__filename);

const modelDefiners = [];

fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

modelDefiners.forEach((model) => model(sequelize));

let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

const {
  Users,
  ReportEvent,
  ReportUser,
  Events,
  ReviewUser,
  ReviewEvent,
  ChatEvent,
  ChatPersonal
} = sequelize.models;

Users.belongsToMany(Events, { through: "Users_Events", as: "Events" });
Events.belongsToMany(Users, { through: "Users_Events", as: "Users" });

Events.hasMany(ChatEvent, { as: "chatEvents" });
ChatEvent.belongsTo(Events, { foreignKey: "eventId", as: "event" });

// Relación n a 1 entre User y ChatEvent
Users.hasMany(ChatEvent, { foreignKey: "senderId" });
ChatEvent.belongsTo(Users, { as: "chatUser", foreignKey: "senderId" });


// Relación n a 1 entre User y ChatPersonal
Users.hasMany(ChatPersonal, { foreignKey: "senderId" });
ChatPersonal.belongsTo(Users, { as: "sender", foreignKey: "senderId" });

Users.hasMany(ChatPersonal, { foreignKey: "receiverId" });
ChatPersonal.belongsTo(Users, { as: "receiver", foreignKey: "receiverId" });


Users.hasMany(ReportUser, { as: "reportUser", foreignKey: "idUserReporter" });
ReportUser.belongsTo(Users, { as: "reportUser", foreignKey: "idUserReporter" });

// Relación con el modelo Users
Users.hasMany(ReviewUser, { as: "reviewUser", foreignKey: "userId" });
ReviewUser.belongsTo(Users, { as: "reviewUser", foreignKey: "userId" });

// Relación 1 a n entre Report y Event
Events.hasMany(ReportEvent, {
  as: "reportEvent",
  foreignKey: "idEventReporte",
});
ReportEvent.belongsTo(Events, {
  as: "reportEvent",
  foreignKey: "idEventReporte",
});

// Relación 1 a n entre Review y Event
Events.hasMany(ReviewEvent, { as: "reviewEvent", foreignKey: "idEventReview" });
ReviewEvent.belongsTo(Events, {
  as: "reviewEvent",
  foreignKey: "idEventReview",
});



module.exports = {
  ...sequelize.models,
  conn: sequelize,
};
