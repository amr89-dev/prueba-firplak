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
  guiaTransporteId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  documentoEntregaId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  novedades: {
    type: DataTypes.TEXT,
  },
});

module.exports = PruebaEntrega;
