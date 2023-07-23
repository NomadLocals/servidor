const { Router } = require("express");
const router = Router();

const {
    postReviewEvent,
    getReviewEvent,
    deleteReviewEvent,
} = require('../controllers/controllerReviewEvent');

router.post("/", async (req, res) => {
const { type, description, UserNameUserReview, idEventReview, score } = req.body;

try {
    if (!type || !description  || !idEventReview || !UserNameUserReview || !score) {
    throw Error("I'm sorry I don't receive the complete information");
    } else {
    const dataReviewEvent = await postReviewEvent(
        type,
        description,
        UserNameUserReview,
        idEventReview,
        score
    );
    res.status(200).json(dataReviewEvent);
    }
} catch (error) {
    return res.status(404).send(error.message);
}
});

router.get("/:id", async (req, res) => {
const { id } = req.params;
const review = await getReviewEvent(id);
try {
    res.status(200).json(review);
} catch (error) {
    return res.status(200).send(error.message);
}
});


router.delete("/delete/:id", async (req, res) => {
const { id } = req.params;
try {
    const deleteReview= await deleteReviewEvent(id);
    res.status(200).json(deleteReview);
} catch (error) {
    res.status(500).json({ error: "An error occurred while deleting the review" })
}
});

module.exports = router;
