require("dotenv").config();
const { Sequelize } = require("sequelize");

const fs = require("fs");
const path = require("path");

const { DB_USER, DB_PASSWORD, DB_HOST, PGPASSWORD, DB_RENDER } = process.env;

// !! este sequelize es para trabajar en produccion... cuando hay que modificar cosa en la DB

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/nomadlocals`,
  {
    logging: false,
    native: false,
  }
);

//! este sequelize es para RENDERIZADO... DEPLOY DB en render.s.

// const sequelize = new Sequelize(DB_RENDER, {
//   logging: false,
//   native: false,
//   dialectOptions: {
//     ssl: true, // Deshabilitar la conexión SSL/TLS
//   },
// });

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
  Chat,
  ReviewUser,
  ReviewEvent,
} = sequelize.models;

// Relación n * n entre User y Event
//! correccion de nombre de relacion estaban saliendo dos veces la relacion usersEvents
// por que le faltaba una s en la segunda vez que se nombra UserEvent
Users.belongsToMany(Events, { through: "Users_Events", as: "Events" });
Events.belongsToMany(Users, { through: "Users_Events", as: "Users" });

// Relación n a 1 entre User y Chat
Users.hasMany(Chat, { foreignKey: "senderId" });
Chat.belongsTo(Users, { as: "sender", foreignKey: "senderId" });

// Relación 1 a n entre Chat y Event
Events.hasMany(Chat, { foreignKey: "eventId" });
Chat.belongsTo(Events, { foreignKey: "eventId" });

// solucion de foreignKey ReportUsers y eventos...
// cambios en los nombres de la relacion y nombre del id que reporta

Users.hasOne(ReportUser, { foreignKey: "idUserReporter" });
ReportUser.belongsTo(Users, { as: "report", foreignKey: "idUserReporter" });

// Relación con el modelo Users
Users.hasMany(ReviewUser, { foreignKey: "userId" });
ReviewUser.belongsTo(Users, { as: "user", foreignKey: "userId" });

// Relación con el modelo Events
Events.hasMany(ReviewUser, { foreignKey: "eventId" });
ReviewUser.belongsTo(Events, { as: "event", foreignKey: "eventId" });

// Relación 1 a n entre Report y Event
Events.hasMany(ReportEvent, { foreignKey: "idEventReporte" });
ReportEvent.belongsTo(Events, { as: "report", foreignKey: "idEventReporte" });

// Relación 1 a n entre Review y Event
Events.hasMany(ReviewEvent, { foreignKey: "idEventReview" });
ReviewEvent.belongsTo(Events, { as: "review", foreignKey: "idEventReview" });

module.exports = {
  ...sequelize.models,
  conn: sequelize,
};
