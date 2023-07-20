const { Op } = require("sequelize");
const { Router } = require("express");

const router = Router();
const { Events } = require("../db");
const { filterEvents } = require("../controllers/controllerFilter");

//? FILTER BY todo ver. SebaT

router.get("/", async (req, res) => {
  const filtros = req.query;
  // console.log(filtros);
  try {
    const eventsFiltered = await filterEvents(req.query);
    if (!eventsFiltered.length)
      return res.status(404).json({ message: "No se encontraron eventos" });
    return res.json(eventsFiltered);
  } catch (error) {
    console.log(error);
    return res.status(500).send("Error al buscar eventos");
  }
});

//? FILTER BY todo ver. Dani
// router.get("/", async (req, res) => {
//   const { activityType, name, size, eventDate, duration, location, cost } = req.query;
//   try {
//     const allEvents = await Events.findAll();
//     const filteredEvents = allEvents.filter(event => {
//       let match = true;
//       if (activityType && !event.activityType.includes(activityType)) {
//         match = false;
//       }
//       if (name && !event.name.toLowerCase().includes(name.toLowerCase())) {
//         match = false;
//       }
//       if (eventDate && event.eventDate !== eventDate) {
//         match = false;
//       }
//       if (duration && event.duration !== duration) {
//         match = false;
//       }
//       if (size && event.size !== parseInt(size)) {
//         match = false;
//       }
//       if (location && event.location !== location) {
//         match = false;
//       }
//       if (cost && event.cost !== parseInt(cost)) {
//         match = false;
//       }
//       return match;
//     });
//     if (!filteredEvents) {
//       return res.status(404).json({ message: "No se encontraron eventos" });
//     }
//     return res.status(200).json(filteredEvents);
//   } catch (error) {
//     console.log(error);
//     return res.status(500).send('Error al buscar eventos');
//   }
// });



module.exports = router;


