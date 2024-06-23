
const DashboardService = require('../services/dashboardService');

//대시보드 CREATE
exports.createDashboard = async (req, res) => {
  try {
    const dashboard = await DashboardService.createDashboard(req.body);
    res.status(201).json(dashboard);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


//Email별로 대시보드 READ
exports.getDashboardsByEmail = async (req, res) => {
  try {
    const { email } = req.params;
    const dashboards = await DashboardService.getDashboardsByEmail(email);
    res.status(200).json(dashboards);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//대시보드 이름 PUT
exports.updateDashboardName = async (req, res) => {
    try {
      const { id } = req.params;
      const { newName } = req.body;
      const updatedDashboard = await DashboardService.updateDashboardName(id, newName);
      res.status(200).json(updatedDashboard);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
};

exports.getProjectPathById = async (req, res) => {
    try {
      const { id } = req.params;
      const projectPath = await DashboardService.getProjectPathById(id);
      res.status(200).json({ projectPath });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

// 다른 CRUD 함수들 추가 가능
