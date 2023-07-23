const { Router } = require("express");
const router = Router();

const {
  getAllReviewsUser,
  createReviewUser,
  deleteReviewUser,
  getReviewUserById
} = require('../controllers/controllerReviewUser');

router.post('/', async (req, res) => {
  const { type, description, UserNameUserReview, idUserReview } = req.body;
  try {
    if (!type || !description  || !idUserReview || !UserNameUserReview) {
      throw Error("I'm sorry I didn't receive the complete information");
    } else {
      const dataReviewUser = await createReviewUser(
        type,
        description,
        UserNameUserReview,
        idUserReview,
      );
      res.status(200).json(dataReviewUser);
    }
  } catch (error) {
    return res.status(404).send(error.message);
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const reviewUser = await getReviewUserById(id);
  try {
    res.status(200).json(reviewUser);
  } catch (error) {
    return res.status(200).send(error.message);
  }
});

router.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedReviewUser = await deleteReviewUser(id);
    res.status(200).json(deletedReviewUser);
  } catch (error) {
    res.status(500).json({ error: "An error occurred while deleting the review user" });
  }
});

module.exports = router;
