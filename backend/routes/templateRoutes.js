const express = require('express'); // express 모듈을 불러옵니다.
const router = express.Router(); // express의 Router를 사용하여 라우터를 생성합니다.
const templateController = require('../controllers/templateController'); // templateController 모듈을 불러옵니다.

// GET 요청을 처리하기 위한 라우트를 정의합니다.
router.get('/templates', templateController.getTemplates);

module.exports = router; // 라우터를 모듈로 내보냅니다.