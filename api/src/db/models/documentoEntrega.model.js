const { DataTypes } = require("sequelize");
const db = require("../db");

const DocumentoEntrega = db.define("DocumentoEntrega", {
  id: {
    type: DataTypes.UUID,
    allowNull: false,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  fechaDespacho: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  fechaEntrega: {
    type: DataTypes.DATE,
  },
  numeroConsecutivo: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
  },

  destino: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  productos: {
    type: DataTypes.STRING,
  },
  codVerificacion: {
    type: DataTypes.STRING,
  },
});

module.exports = DocumentoEntrega;
