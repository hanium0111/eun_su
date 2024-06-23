// services/dashboardService.js
const Dashboard = require('../models/dashboard');

exports.createDashboard = async (data) => {
  return await Dashboard.create(data);
};


// 이메일을 기준으로 대시보드 가져옴
exports.getDashboardsByEmail = async (email) => {
  return await Dashboard.findAll({ where: { email } });
};


exports.updateDashboardName = async (id, newName) => {
  const dashboard = await Dashboard.findByPk(id);
  if (!dashboard) {
  throw new Error('Dashboard not found');
  }
  dashboard.ProjectName = newName;
  await dashboard.save();
  return dashboard;
 };

 exports.getProjectPathById = async (id) => {
  const dashboard = await Dashboard.findByPk(id, {
  attributes: ['projectPath'],
  });
  if (!dashboard) {
  throw new Error('Dashboard not found');
  }
  return dashboard.projectPath;
};


// 다른 CRUD 함수들 추가 가능
