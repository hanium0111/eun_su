const Templates = require('../models/templates'); // Sequelize 모델

exports.getAllTemplates = async () => {
  // 데이터베이스에서 모든 템플릿을 가져옵니다.
  return await Templates.findAll({
    attributes: ['id','category', 'description'] // 가져올 필드를 명시합니다.
  });
};

exports.getTemplatePathById = async (id) => {
  return await Templates.findByPk(id, {
    attributes: ['templateName','templatePath']
  });
};
