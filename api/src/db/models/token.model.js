const { DataTypes, Sequelize } = require("sequelize");
const db = require("../db");

const Token = db.define("token", {
  token: {
    type: DataTypes.STRING,
    unique: true,
  },
});

module.exports = Token;
