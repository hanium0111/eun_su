// routes/dashboardRoutes.js
const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/dashboardController');

router.post('/dashboard/create', dashboardController.createDashboard);
router.get('/dashboard/email/:email', dashboardController.getDashboardsByEmail);
router.put('/:id/name', dashboardController.updateDashboardName);
// 다른 CRUD 라우트들 추가 가능

module.exports = router;
