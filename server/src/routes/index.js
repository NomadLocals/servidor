const { Router } = require("express");
const router = Router();
const express = require("express");
const path = require("path");

//todos importacion de rutas
//* rutas de usuarios
const routerUser = require("./routerUser");
const routerReportUser = require("./routerReportUser");
const routerReviewUser = require("./routerReviewUser");
const routerUserEvent = require("./routerUserEvent");
//* rutas de eventos
const routerEvents = require("./routerEvents");
const routerReportEvent = require("./routerReportEvent");
const routerReviewEvent = require("./routerReviewEvent");
//* rutas de filtros
const routerFilter = require("./routerFilter");
//* rutas de admins
const routerAdmins = require("./routerAdmins");
//* rutas de chats
const routerChatEvent = require("./routerChatEvent");
const routerChatPersonal = require("./routerChatPersonal");
//* rutas de emails
const routerSendMail = require("./routerSendMail");



//todos declaracion de rutas
//* rutas de usuarios
router.use("/reportuser", routerReportUser);
router.use("/users", routerUser);
router.use("/reviewuser", routerReviewUser);
//* rutas de eventos
router.use("/events", routerEvents);
router.use("/reportevent", routerReportEvent);
router.use("/reviewevent", routerReviewEvent);
router.use("/events", routerUserEvent);
//* rutas de filtros
router.use("/filter", routerFilter);
//* rutas de admins
router.use("/", routerAdmins);
//* rutas de chats
router.use("/events", routerChatEvent);
router.use("/chat/personal", routerChatPersonal);
//* rutas de emails
router.use("/send-mail", routerSendMail);


module.exports = router;