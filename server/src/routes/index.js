const { Router } = require("express");
const router = Router();

//? importacion de routes
const routerEvents = require("./routerEvents");
const routerReportUser = require('./routerReportUser');
const routerUser = require('./routerUser')
const routerReportEvent = require('./routerReportEvent');
const routerFilter = require('./routerFilter');
const routerReviewEvent = require('./routerReviewEvent')
const routerReviewUser = require('./routerReviewUser');
const routerUserEvent = require("./routerUserEvent");
const routerAdmins = require("./routerAdmins");
const routerChatPersonal = require('./routerChatPersonal');
const routerChatEvent = require('./routerChatEvent');
const routerSendMail = require("./routerSendMail");

router.use('/events', routerEvents); 
router.use("/reportuser", routerReportUser);
router.use("/users", routerUser);
router.use("/reportevent", routerReportEvent);
router.use("/filter", routerFilter);
router.use("/reviewevent", routerReviewEvent);
router.use("/reviewuser", routerReviewUser);
router.use("/events", routerUserEvent);
router.use("/", routerAdmins);
router.use('/events', routerChatPersonal)
router.use('/events', routerChatEvent)
router.use("/send-mail", routerSendMail);

module.exports = router;
