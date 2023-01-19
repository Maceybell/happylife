const { DataTypes } = require("sequelize");
const db = require("./database");

const Plan = db.define("plan", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  type: DataTypes.STRING,
  flowers: DataTypes.BOOLEAN,
  gifts: DataTypes.BOOLEAN,
  monthly_consults: DataTypes.BOOLEAN,
  letter_assistant: DataTypes.BOOLEAN,
  reservations: DataTypes.BOOLEAN,
  planned_dates: DataTypes.BOOLEAN,
  price: DataTypes.FLOAT,

});

const User = db.define('user', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    email: DataTypes.STRING({length: 20}),
    password: DataTypes.STRING({length: 300}),
    f_name: DataTypes.STRING,
    l_name: DataTypes.STRING,
    spouse_name: DataTypes.STRING,
    spouse_bday: DataTypes.DATE,
    anniversary: DataTypes.DATE,
    address: DataTypes.STRING,
    admin: DataTypes.BOOLEAN
})

module.exports={User, Plan}