const { Router } = require("express");
const {
  postEvent,
  getAllEvents,
  getEventById,
  deleteEventById,
  updateEventById,
} = require("../controllers/controllerEvents");

const router = Router();

router.post("/", async (req, res) => {
  const {
    userId,
    name,
    activityType,
    description,
    eventDate,
    minSizePeople,
    duration,
    image,
    place,
    location,
    minCost,
    active,
  } = req.body;
  try {
    if (
      !userId ||
      !name ||
      !activityType ||
      !description ||
      !eventDate ||
      !duration ||
      !minSizePeople ||
      !image ||
      !place ||
      !location ||
      !minCost
    ) {
      throw Error("falta info");
    } else {
      const newEvent = await postEvent({
        userId,
        name,
        description,
        activityType,
        eventDate,
        duration,
        minSizePeople,
        image,
        place,
        location,
        minCost,
        active,
      });
      return res.status(200).json(newEvent);
    }
  } catch (error) {
    console.log(error);
    return res.status(404).json(error.message);
  }
});

router.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const event = await deleteEventById(id);
    if (event.message) {
      return res.status(404).json(event);
    }
    return res.status(200).json(event);
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar el evento" });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const result = await deleteEventById(id);
  return res.json(result);
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const eventData = req.body;
  try {
    const updatedEvent = await updateEventById(id, eventData);
    res.status(200).json(updatedEvent);
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar el evento" });
  }
});

router.get("/", async (req, res) => {
  const allEvents = await getAllEvents();
  try {
    res.status(200).json(allEvents);
  } catch (error) {
    return res.status(404).send(error.message);
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    if (id) {
      const eventById = await getEventById(id);
      if (eventById.error) return res.status(404).json(eventById);
      return res.status(200).json(eventById);
    } else {
      const allEvents = await getAllEvents();
      return res.status(200).json(allEvents);
    }
  } catch (error) {
    return res.status(404).send({ message: "el evento no existe" });
  }
});

module.exports = router;
