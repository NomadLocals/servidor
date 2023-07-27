const { Events, Users } = require("../db");

const joinEvent = async (eventId, userId) => {
  try {
    const event = await Events.findByPk(eventId);
    if (!event) {
      return { message: "Event Not Found" };
    }
    const user = await Users.findByPk(userId);
    if (!user) {
      return { message: "User Not Found" };
    }
    await user.addEvent(event);
    return { message: "User matched to Event" };
  } catch (error) {
    return { error: error.message };
  }
};

const removeUserFromEvent = async (eventId, userId) => {
  try {
    const event = await Events.findByPk(eventId);
    if (!event) {
      return { message: "Event not found" };
    }

    const user = await Users.findByPk(userId);
    if (!user) {
      return { message: "User not found" };
    }

    await user.removeEvent(event);

    return { message: "User removed from event" };
  } catch (error) {
    return { message: "Error removing user from event" };
  }
};

module.exports = {
  joinEvent,
  removeUserFromEvent,
}