const { Router } = require("express");
const router = Router();

const {
  postReportUser,
  getReportById,
  deleteReportUser,
} = require("../controllers/controllerReportUser");

router.post("/", async (req, res) => {
  const { type, description, idUserReporter, idUserReporte } = req.body;
  try {
    if (!type || !description || !idUserReporter || !idUserReporte) {
      throw Error("I'm sorry I don't receive the complete information");
    } else {
      const dataReportUser = await postReportUser(
        type,
        description,
        idUserReporter,
        idUserReporte
      );
      res.status(200).json(dataReportUser);
    }
  } catch (error) {
    return res.status(404).send(error.message);
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const report = await getReportById(id);
  try {
    res.status(200).json(report);
  } catch (error) {
    return res.status(404).send(error.message);
  }
});

router.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deleteReport = await deleteReportUser(id);
    res.status(200).json(deleteReport);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while deleting the report" });
  }
});

module.exports = router;
