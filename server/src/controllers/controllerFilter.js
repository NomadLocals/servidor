const { Events } = require("../db");
const { Op, sequelize } = require("sequelize");

const filterEvents = async ({
  name,
  activityType,
  size,
  minCost,
  eventDate,
}) => {
  const whereClause = {};
  console.log(minCost);

  if (name) {
    whereClause.name = { [Op.like]: `%${name}%` };
  }

  if (activityType && activityType !== "all") {
    whereClause.activityType = { [Op.like]: `%${activityType}%` };
  }

  if (size) {
    whereClause.minSizePeople = { [Op.between]: [size.min, size.max] };
  }

  if (minCost && minCost !== "all") {
    if (minCost === "free") {
      whereClause.minCost = {
        [Op.eq]: 0,
      };
    }
    if (minCost === "notFree") {
      whereClause.minCost = {
        [Op.gt]: 0,
      };
    }
  }

  if (eventDate) {
    const currentDate = new Date();
    const parsedDate = new Date(eventDate);
    if (parsedDate >= currentDate) {
      whereClause.eventDate = { [Op.gte]: eventDate };
    }
  } else {
    const currentDate = new Date();
    whereClause.eventDate = { [Op.gte]: currentDate };
  }

  const eventsFiltered = await Events.findAll({
    where: whereClause,
    order: [
      ["eventDate", "ASC"],
      ["name", "ASC"],
    ],
  });

  return eventsFiltered;
};

module.exports = {
  filterEvents,
};
