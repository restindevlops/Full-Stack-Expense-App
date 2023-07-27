const Sequelize=require('sequelize');

const sequelize= require('../util/database');

const Expense = sequelize.define('expense',{
  id:{
    type: Sequelize.INTEGER,
    autoIncrement: true,
    autoNull: false,
    primaryKey: true
  },
  amount: Sequelize.INTEGER,
  description:{
    type: Sequelize.STRING,
    autoNull: false
    
  },
   category:{
    type: Sequelize.STRING,
    autoNull: false
  }
});

module.exports=Expense;