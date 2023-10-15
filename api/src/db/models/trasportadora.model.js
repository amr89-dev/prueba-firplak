const { DataTypes, UUIDV4 } = require("sequelize");
const db = require("../db");

const Transportadora = db.define("Transportadora", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    allowNull: true,
    defaultValue: UUIDV4,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  telefono: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  nit: {
    type: DataTypes.STRING,
  },
});

module.exports = Transportadora;
