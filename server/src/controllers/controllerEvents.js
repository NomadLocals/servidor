const { Events, ReportEvent, ReviewEvent, Users } = require("../db");

const getAllEvents = async () => {
  try {
    const allevents = await Events.findAll({
      include: [
        {
          model: ReportEvent,
          as: "reportEvent",
        },
        {
          model: ReviewEvent,
          as: "reviewEvent",
        },
        {
          model: Users,
          as: "Users",
        },
      ],
    });

    return allevents;
  } catch (error) {
    console.log(error);
  }
};
// GET /events/:id
const getEventById = async (id) => {
  try {
    const event = await Events.findOne({
      where: { id },
      include: [
        {
          model: ReportEvent,
          as: "reportEvent",
        },
        {
          model: ReviewEvent,
          as: "reviewEvent",
        },
        {
          model: Users,
          as: "Users",
        },
      ],
    });
    return event;
  } catch (error) {
    console.log(error);
  }
};

// POST /events
const postEvent = async ({
  userId,
  name,
  description,
  activityType,
  eventDate,
  minSizePeople,
  duration,
  image,
  place,
  location,
  minCost,
}) => {
  const newEvent = await Events.findOrCreate({
    where: {
      userId,
      name,
      description,
      activityType,
      eventDate,
      minSizePeople,
      duration,
      image,
      place,
      location,
      minCost,
    },
  });
  const user = await Users.findAll({ where: { id: userId } });
  console.log(user);
  if (user) {
    await newEvent[0].setUsers(user);
  }
  return newEvent[0];
};

// DELETE /events/:id
const deleteEventById = async (id) => {
  try {
    const event = await Events.findByPk(id);
    if (!event) {
      return { message: "Evento no encontrado" };
    }
    console.log("Evento encontrado:", event.toJSON());
    await event.destroy();
    console.log("Evento eliminado:", event.toJSON());
    return { message: "Evento eliminado exitosamente" };
  } catch (error) {
    console.log(error);
  }
};

// PUT /events/:id
const updateEventById = async (id, eventData) => {
  try {
    const event = await Events.findByPk(id);
    if (!event) {
      return { message: "Evento no encontrado" };
    }
    await event.update(eventData);
    const updatedEvent = await Events.findByPk(id);
    return updatedEvent;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  postEvent,
  getAllEvents,
  getEventById,
  deleteEventById,
  updateEventById,
};
