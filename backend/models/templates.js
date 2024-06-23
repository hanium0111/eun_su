const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Templates = sequelize.define('Templates', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  templateName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  templatePath: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },

  category:{
    type:DataTypes.STRING,
    allowNull: false
  },

  description: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Templates;
