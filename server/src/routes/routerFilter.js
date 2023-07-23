const { Op } = require("sequelize");
const { Router } = require("express");
const router = Router();

const { filterEvents } = require("../controllers/controllerFilter");

router.get("/", async (req, res) => {
  const filtros = req.query;
  try {
    const eventsFiltered = await filterEvents(req.query);
    if (!eventsFiltered.length)
      return res.status(404).json({ message: "No se encontraron eventos" });
    return res.json(eventsFiltered);
  } catch (error) {
    return res.status(500).send("Error al buscar eventos");
  }
});

module.exports = router;


