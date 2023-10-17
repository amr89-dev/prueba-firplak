const { DataTypes } = require("sequelize");
const db = require("../db");

const PruebaEntrega = db.define("PruebaEntrega", {
  id: {
    type: DataTypes.UUID,
    allowNull: false,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  urlImagen: {
    type: DataTypes.STRING,
  },

  novedades: {
    type: DataTypes.TEXT,
    defaultValue: "NO",
  },
});

module.exports = PruebaEntrega;
