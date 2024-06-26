// services/dashboardService.js
const Dashboard = require('../models/dashboard');


// 데이터베이스에 저장하는 함수
exports.saveDashboard = async (projectData) => {
  try {
    const newProject = await Dashboard.create(projectData);
    console.log('Project saved successfully:', newProject);
    return newProject;
  } catch (error) {
    console.error('Error saving project to database:', error);
    throw new Error('Failed to save project to database.');
  }
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

 exports.getDashboardsByProjectPath = async (projectPath) => {
  const dashboard = await Dashboard.findOne({
    where: { projectPath: projectPath },
    attributes: ['imagePath', 'projectName'],
  });
  if (!dashboard) {
    throw new Error('No dashboards found for the given project path');
  }
  return dashboard; // findOne은 객체를 반환합니다
};




// 다른 CRUD 함수들 추가 가능
