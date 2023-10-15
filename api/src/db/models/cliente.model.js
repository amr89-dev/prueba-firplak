const { DataTypes } = require("sequelize");
const db = require("../db");

const Cliente = db.define("Cliente", {
  id: {
    type: DataTypes.UUID,
    allowNull: false,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  nombreCliente: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  telefono: {
    type: DataTypes.STRING,
  },
});

module.exports = Cliente;
