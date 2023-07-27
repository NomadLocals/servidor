const {
  Users,
  Events,
  ReportUser,
  ReviewUser,
  ReportEvent,
  ReviewEvent,
} = require("../db");

const getForAdminUser = async () => {
  try {
    const allUsers = await Users.scope().findAll({
      paranoid: false,
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
    res.status(500).json({error: 'Error de servidor'});
  }
};

const getForAdminEvent = async () => {
  try {
    const allevents = await Events.scope().findAll({
      paranoid: false,
      include: [
        {
          model: ReportEvent,
          as: "reportEvent",
        },
        {
          model: ReviewEvent,
          as: "reviewEvent",
        },
        {
          model: Users,
          as: "Users",
        },
      ],
    });

    return allevents;
  } catch (error) {
    res.status(500).json({error: 'Error de servidor'});
  }
};

const getForAdminReportUser = async () => {
  try {
    const allReport = await ReportUser.scope().findAll({
      paranoid: false,
      include: [
        {
          model: Users,
          as: "reportUser",
        },
      ],
    });
    return allReport;
  } catch (error) {
    res.status(500).json({error: 'Error de servidor'});
  }
};

const getForAdminReportEvent = async () => {
  try {
    const allReport = await ReportEvent.scope().findAll({
      paranoid: false,
      include: [
        {
          model: Events,
          as: "reportEvent",
        },
      ],
    });
    return allReport;
  } catch (error) {
    res.status(500).json({error: 'Error de servidor'});
  }
};

const getForAdminReviewUser = async () => {
  try {
  } catch (error) {}
  try {
    const allReview = await ReviewUser.scope().findAll({
      paranoid: false,
      include: [
        {
          model: Users,
          as: "reviewUser",
        },
      ],
    });
    return allReview;
  } catch (error) {
    console.log(error.message);
  }
};

const getForAdminReviewEvent = async () => {
  try {
  } catch (error) {}
  try {
    const allReview = await ReviewEvent.scope().findAll({
      paranoid: false,
      include: [
        {
          model: Events,
          as: "reviewEvent",
        },
      ],
    });
    return allReview;
  } catch (error) {
    res.status(500).json({error: 'Error de servidor'});
  }
};

const putForAdminUser = async (userData, idPut) => {
  try {
    const user = await Users.findByPk(idPut);
    if (!user) {
      return { message: "Evento no encontrado" };
    }
    await user.update(userData);
    const updatedUser = await Users.scope().findByPk(idPut);
    return updatedUser;
  } catch (error) {
    res.status(500).json({error: 'Error de servidor'});
  }
};

const getForAdminResetUser = async (idUser) => {
  try {
    const user = await Users.findByPk(idUser, {paranoid: false,});
    if (user) {
      await user.restore()
    }
    return user;
  } catch (error) {
    res.status(500).json({error: 'Error de servidor'});
  }
};

const getForAdminResetEvent = async (idEvent) => {
  try {
    const event = await Events.findByPk(idEvent, {paranoid: false,});
    if (event) {
      await event.restore();
    }
    return event;
  } catch (error) {
    res.status(500).json({error: 'Error de servidor'});
  }
};

module.exports = {
  getForAdminReviewEvent,
  getForAdminReviewUser,
  getForAdminReportEvent,
  getForAdminReportUser,
  getForAdminEvent,
  getForAdminUser,
  putForAdminUser,
  getForAdminResetUser,
  getForAdminResetEvent,
};