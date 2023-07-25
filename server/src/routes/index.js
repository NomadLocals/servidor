const { Router } = require("express");
const router = Router();

//todos importacion de rutas
//* rutas de usuarios
const routerUser = require('./routerUser')
const routerReportUser = require('./routerReportUser');
const routerReviewUser = require('./routerReviewUser');
const routerUserEvent = require("./routerUserEvent");
const routerAdmins = require("./routerAdmins");
const routerChatPersonal = require('./routerChatPersonal');
const routerChatEvent = require('./routerChatEvent');
const routerSendMail = require("./routerSendMail");

//todos declaracion de rutas
//* rutas de usuarios
router.use("/reportuser", routerReportUser);
router.use("/users", routerUser);
router.use("/reportevent", routerReportEvent);
router.use("/reviewevent", routerReviewEvent);
router.use("/events", routerUserEvent);
//* rutas de filtros
router.use("/filter", routerFilter);
//* rutas de admins
router.use("/", routerAdmins);
router.use('/events', routerChatPersonal)
router.use('/events', routerChatEvent)
router.use("/send-mail", routerSendMail);

module.exports = router;