const express = require('express');
const router = express.Router();
const generateController = require('../controllers/generateController');

// POST 요청을 처리하기 위한 라우트를 정의합니다.
router.post('/process-requirements', generateController.handleChatInput);
router.post('/srs', generateController.generateSRS);

module.exports = router;
