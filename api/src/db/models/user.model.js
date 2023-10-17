const { DataTypes, Sequelize } = require("sequelize");
const db = require("../db");

const User = db.define("User", {
  id: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  role: {
    allowNull: false,
    type: DataTypes.ENUM("Cliente", "Admin", "Transportadora"),
    defaultValue: "Cliente",
  },
});

module.exports = User;
