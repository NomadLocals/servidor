const { Users, ReportUser, Events, ReviewUser } = require("../db");

const postUser = async ({
  id,
  firstName,
  lastName,
  userName,
  email,
  interests,
  place,
  age,
  geolocation,
  gender,
  admin,
  image,
  phone,
}) => {
  try {
    if (
      email === "nomad.locals01@gmail.com" ||
      email === "juantosso89@gmail.com"
    ) {
      admin = true;
    }
    const newUserCreated = await Users.findOrCreate({
      where: { email },
      defaults: {
        id,
        firstName,
        lastName,
        userName,
        interests,
        place,
        age,
        geolocation,
        gender,
        admin,
        image,
        phone,
      },
    });
    return newUserCreated[0];
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const getAllUsers = async () => {
  try {
    const allUsers = await Users.findAll({
      include: [
        {
          model: ReportUser,
          as: "reportUser",
        },
        {
          model: ReviewUser,
          as: "reviewUser",
        },
        {
          model: Events,
          as: "Events",
        },
      ],
    });
    return allUsers;
  } catch (error) {
    console.log(error);
  }
};

const getUserById = async (id) => {
  try {
    const user = await Users.findOne({
      where: { id },
      include: [
        {
          model: ReportUser,
          as: "ReportUser",
        },
      ],
      include: [
        {
          model: Events,
          as: "Events",
        },
      ],
    });

    if (!user) {
      throw new Error("Usuario no encontrado");
    }
    return user;
  } catch (error) {
    console.error("Error al obtener el usuario:", error);
    throw error;
  }
};

const updateUserById = async (id, userData) => {
  try {
    const user = await Users.findByPk(id);
    if (!user) {
      return { message: "Evento no encontrado" };
    }
    await user.update(userData);
    const updatedUser = await Users.findByPk(id);
    return updatedUser;
  } catch (error) {
    console.log(error);
  }
};

const deleteUserById = async (id) => {
  try {
    const user = await Users.findByPk(id);
    if (!user) {
      return { message: "Usuario no encontrado" };
    }
    await user.destroy();
    return { message: "Usuario eliminado" };
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  postUser,
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
};
