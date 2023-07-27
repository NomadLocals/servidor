const { ReviewEvent, Events } = require("../db");

const postReviewEvent = async (
  type,
  description,
  UserNameUserReview,
  idEventReview,
  score
) => {
  const event = await Events.findByPk(idEventReview);
  if (!event) {
    throw Error("Event not found.");
  }
  const newReview = await ReviewEvent.findOrCreate({
    where: { type, description, UserNameUserReview, score },
  });
  await newReview[0].setReviewEvent(event);
  return newReview[0];
};

const getReviewEvent = async (id) => {
  const review = await ReviewEvent.findOne({
    where: { id },
    include: {
      model: Events,
      as: "review",
    },
  });
  if (review) return review;
  return { error: "no review found" };
};

const deleteReviewEvent = async (id) => {
  try {
    const review = await ReviewEvent.findByPk(id);
    if (!review) {
      return { error: "no reviews found" };
    }
    await review.destroy();
    return { error: "Review deleted successfully" };
  } catch (error) {
    res.status(500).json({error: 'Error de servidor'});
  }
};

module.exports = {
  postReviewEvent,
  getReviewEvent,
  deleteReviewEvent,
};
