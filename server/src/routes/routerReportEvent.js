const { Router } = require("express");
const router = Router();

const {
  postReportEvent,
  getReportEvent,
  deleteReportEvent,
} = require("../controllers/controllerReportEvent");

router.post("/", async (req, res) => {
  const { type, description, userNameUserReporter, idEventReporte } = req.body;
  try {
    if (!type || !description || !idEventReporte || !userNameUserReporter) {
      throw Error("I'm sorry I don't receive the complete information");
    } else {
      const dataReportEvent = await postReportEvent(
        type,
        description,
        userNameUserReporter,
        idEventReporte
      );
      res.status(200).json(dataReportEvent);
    }
  } catch (error) {
    return res.status(404).send(error.message);
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const report = await getReportEvent(id);
  try {
    res.status(200).json(report);
  } catch (error) {
    return res.status(200).send(error.message);
  }
});

router.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deleteReport = await deleteReportEvent(id);
    res.status(200).json(deleteReport);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while deleting the report" });
  }
});

module.exports = router;
