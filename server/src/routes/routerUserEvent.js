const { Router } = require("express");
const {
  joinEvent,
  removeUserFromEvent,
} = require("../controllers/controllerUserEvent");
const router = Router();

router.post("/:id/users", async (req, res) => {
  try {
    const { id } = req.params;
    const { userId } = req.body;

    const result = await joinEvent(id, userId);

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: "User not joined to Event" });
  }
});

router.delete("/:id/users", async (req, res) => {
  try {
    const { id } = req.params;
    const { userId } = req.query;
    const result = await removeUserFromEvent(id, userId);
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error removing user from event" });
  }
});

module.exports = router;
