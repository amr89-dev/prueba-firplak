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
    type: DataTypes.STRING,
    allowNull: false,
  },

  destino: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = DocumentoEntrega;
