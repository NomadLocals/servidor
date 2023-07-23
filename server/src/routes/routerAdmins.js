const { Router } = require('express');
const router = Router();
const { Users } = require("../db");

const {
  getForAdminReviewEvent,
  getForAdminReviewUser,
  getForAdminReportEvent,
  getForAdminReportUser,
  getForAdminEvent,
  getForAdminUser,
} = require("../controllers/controllerAdmin");

router.get('/admin/:id/users', async (req, res) => {
  const { id } = req.params;
  try {
    const isAdmin = await Users.findByPk(id)
    if (isAdmin.admin) {
      const users = await getForAdminUser();
      if (users) return res.status(200).json(users);
      return res.status(404).json({error: 'Lo sentimos no pudimos obtener los usuarios'});
    } else {
      res.status(404).json({error: 'Lo sentimos Usted no es un ADMINISTRADOR'});
    }
  } catch (error) {
    console.log(error.message);
  }
});

router.get('/admin/:id/events', async (req, res) => {
  const { id } = req.params;
  try {
    const isAdmin = await Users.findByPk(id)
    if (isAdmin.admin) {
      const events = await getForAdminEvent();
      if (events) return res.status(200).json(events);
      return res.status(404).json({error: 'Lo sentimos no pudimos obtener los eventos'});
    } else {
      res.status(404).json({error: 'Lo sentimos Usted no es un ADMINISTRADOR'});
    }
  } catch (error) {
    console.log(error.message);
  }
});

router.get('/admin/:id/reportuser', async (req, res) => {
  const { id } = req.params;
  try {
    const isAdmin = await Users.findByPk(id)
    if (isAdmin.admin) {
      const report = await getForAdminReportUser();
      if (report) return res.status(200).json(report);
      return res.status(404).json({error: 'Lo sentimos no pudimos obtener los reportes'});
    } else {
      res.status(404).json({error: 'Lo sentimos Usted no es un ADMINISTRADOR'});
    }
  } catch (error) {
    console.log(error.message);
  }
});

router.get('/admin/:id/reportevent', async (req, res) => {
  const { id } = req.params;
  try {
    const isAdmin = await Users.findByPk(id)
    if (isAdmin.admin) {
      const report = await getForAdminReportEvent();
      if (report) return res.status(200).json(report);
      return res.status(404).json({error: 'Lo sentimos no pudimos obtener los reportes'});
    } else {
      res.status(404).json({error: 'Lo sentimos Usted no es un ADMINISTRADOR'});
    }
  } catch (error) {
    console.log(error.message);
  }
});

router.get('/admin/:id/reviewuser', async (req, res) => {
  const { id } = req.params;
  try {
    const isAdmin = await Users.findByPk(id)
    if (isAdmin.admin) {
      const review = await getForAdminReviewUser();
      if (review) return res.status(200).json(review);
      return res.status(404).json({error: 'Lo sentimos no pudimos obtener los reviews'});
    } else {
      res.status(404).json({error: 'Lo sentimos Usted no es un ADMINISTRADOR'});
    }
  } catch (error) {
    console.log(error.message);
  }
});

router.get('/admin/:id/reviewevent', async (req, res) => {
  const { id } = req.params;
  try {
    const isAdmin = await Users.findByPk(id)
    if (isAdmin.admin) {
      const review = await getForAdminReviewEvent();
      if (review) return res.status(200).json(review);
      return res.status(404).json({error: 'Lo sentimos no pudimos obtener los reviews'});
    } else {
      res.status(404).json({error: 'Lo sentimos Usted no es un ADMINISTRADOR'});
    }
  } catch (error) {
    console.log(error.message);
  }
});

module.exports =  router;

