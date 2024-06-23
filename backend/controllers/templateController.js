const templateService = require('../services/templateService'); // templateService 모듈을 불러옵니다.

exports.getTemplates = async (req, res) => { // getTemplates라는 비동기 함수를 정의합니다.
  try {
    // templateService에서 모든 템플릿을 가져옵니다.
    const templates = await templateService.getAllTemplates();
    // 템플릿 목록을 JSON 형식으로 클라이언트에 반환합니다.
    res.json(templates);
  } catch (error) {
    // 에러가 발생하면 500 상태 코드와 에러 메시지를 JSON 형식으로 반환합니다.
    res.status(500).json({ error: error.message });
  }
};
