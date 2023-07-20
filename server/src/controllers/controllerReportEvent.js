const { ReportEvent, Events } = require("../db");

const postReportEvent = async (
  type,
  description,
  userNameUserReporter,
  idEventReporte
) => {
  const event = await Events.findByPk(idEventReporte);
  if (!event) {
    throw Error("Event not found.");
  }
  const newReport = await ReportEvent.findOrCreate({
    where: { type, description, userNameUserReporter },
  });
  await newReport[0].setReport(event);
  return newReport[0];
};

const getReportEvent = async (id) => {
  const report = await ReportEvent.findOne({
    where: { id },
  });
  if (report) return report;
  return { error: "no reports found" };
};

const deleteReportEvent = async (id) => {
  try {
    const report = await ReportEvent.findByPk(id);
    if (!report) {
      return { error: "no reports found" };
    }
    await report.destroy();
    return { error: "Report deleted successfully" };
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  postReportEvent,
  getReportEvent,
  deleteReportEvent,
};
