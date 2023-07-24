const { Users, ReviewUser } = require('../db');

const createReviewUser = async (
  type,
  description,
  UserNameUserReview,
  idUserReview
) => {
  const user = await Users.findByPk(idUserReview);
  if (!user) {
    throw Error('User not found.');
  }
  const newReviewUser = await ReviewUser.findOrCreate({
    where: { type, description, UserNameUserReview },
  });
  await newReviewUser[0].setReviewUser(user);
  return newReviewUser[0];
};

const getAllReviewsUser = async () => {
  const reviewUser = await ReviewUser.findAll();
  if (reviewUser) return reviewUser;
  return { error: 'No review user found' };
};

const getReviewUserById = async (id) => {
  try {
    const review = await ReviewUser.findByPk(id);
    if (!review) {
      return { error: "No existe el review" };
    }
  } catch (error) {
    console.error(error);
  }
};

const deleteReviewUser = async (id) => {
  try {
    const reviewUser = await ReviewUser.findByPk(id);
    if (!reviewUser) {
      return { error: 'No review user found' };
    }
    await reviewUser.destroy();
    return { message: 'Review deleted successfully' };
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  getAllReviewsUser,
  createReviewUser,
  deleteReviewUser,
  getReviewUserById
};
