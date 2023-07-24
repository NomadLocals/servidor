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
const routerUserEvent = require('./routerUserEvent');
const routerAdmins = require('./routerAdmins');

router.use('/events', routerEvents); //body
router.use('/reportuser', routerReportUser);
router.use('/users', routerUser);
router.use('/reportevent', routerReportEvent);
router.use('/filter', routerFilter);
router.use('/reviewevent', routerReviewEvent);
router.use('/reviewuser', routerReviewUser);
router.use('/events', routerUserEvent)
router.use('/', routerAdmins);



module.exports = router;
