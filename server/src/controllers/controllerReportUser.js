const { ReportUser, Users } = require("../db.js");

const postReportUser = async (
  type,
  description,
  idUserReporter,
  idUserReporte
) => {
  const user = await Users.findByPk(idUserReporte);
  if (!user) {
    throw Error("User not found.");
  }
  const newReport = await ReportUser.findOrCreate({
    where: { type, description, idUserReporter},
  })
  await newReport[0].setReportUser(user);
  return newReport[0];
};

const getReportById = async (id) => {
  const report = await ReportUser.findOne({
    where: { id },
    include: {
      model: Users,
      as: "reportUser",
      attributes: ["userName", "age", "gender"],
    },
    attributes: {
      exclude: ["idUserReporter"],
    },
  });
  if (report) return report;
  return { error: `No reports found` };
};

const deleteReportUser = async (id) => {
  try {
    const report = await ReportUser.findByPk(id);
    if (!report) {
      return { error: "Report not found" };
    }
    await report.destroy();
    return { message: "Report deleted successfully" };
  } catch (error) {
    res.status(500).json({error: 'Error de servidor'});
  }
};

module.exports = { postReportUser, getReportById, deleteReportUser };
