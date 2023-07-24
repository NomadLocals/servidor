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
    console.log(error);
  }
};

const getForAdminEvent = async () => {
  try {
    const allevents = await Events.findAll({
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
    console.log(error);
  }
};

const getForAdminReportUser = async () => {
  try {
    const allReport = await ReportUser.findAll({
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
    console.log(error.message);
  }
};

const getForAdminReportEvent = async () => {
  try {
    const allReport = await ReportEvent.findAll({
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
    console.log(error.message);
  }
};

const getForAdminReviewUser = async () => {
  try {
  } catch (error) {}
  try {
    const allReview = await ReviewUser.findAll({
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
    const allReview = await ReviewEvent.findAll({
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
    console.log(error.message);
  }
};

module.exports = {
  getForAdminReviewEvent,
  getForAdminReviewUser,
  getForAdminReportEvent,
  getForAdminReportUser,
  getForAdminEvent,
  getForAdminUser,
};
