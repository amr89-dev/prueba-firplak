const { DataTypes } = require("sequelize");
const db = require("../db");

const Guia = db.define("Guia", {
  id: {
    type: DataTypes.UUID,
    allowNull: false,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  numeroConsecutivo: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    unique: true,
  },
  fechaDespacho: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  destino: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  estado: {
    type: DataTypes.ENUM("Generada", "En Ruta", "Entregado", "Novedad"),
    allowNull: false,
    defaultValue: "Generada",
  },
});

module.exports = Guia;
