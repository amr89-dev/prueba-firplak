const { DataTypes } = require("sequelize");
const db = require("../db");

const PruebaEntrega = db.define("PruebaEntrega", {
  id: {
    type: DataTypes.UUID,
    allowNull: false,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  tipoPrueba: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  novedades: {
    type: DataTypes.TEXT,
  },
});

module.exports = PruebaEntrega;
