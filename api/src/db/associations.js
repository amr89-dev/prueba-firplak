const Cliente = require("./models/cliente.model");
const DocumentoEntrega = require("./models/documentoEntrega.model");
const Guia = require("./models/guia.model");
const PruebaEntrega = require("./models/pruebaEntrega.model");
const Token = require("./models/token.model");
const Transportadora = require("./models/trasportadora.model");
const User = require("./models/user.model");

const associations = () => {
  Cliente.hasMany(Guia, { foreignKey: "clienteId" });
  Cliente.hasMany(DocumentoEntrega, { foreignKey: "clienteId" });
  Cliente.belongsTo(User, {
    foreignKey: {
      field: "userId",
      allowNull: false,
      unique: true,
    },
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  });

  DocumentoEntrega.belongsTo(Cliente, { foreignKey: "clienteId" });
  DocumentoEntrega.belongsTo(Guia, { foreignKey: "guiaTransporteId" });
  DocumentoEntrega.hasOne(PruebaEntrega, {
    foreignKey: "documentoEntregaId",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  });

  Guia.belongsTo(Cliente, { foreignKey: "clienteId" });
  Guia.belongsTo(Transportadora, { foreignKey: "transportadoraId" });
  Guia.hasMany(DocumentoEntrega, { foreignKey: "guiaId" });

  PruebaEntrega.belongsTo(Guia, { foreignKey: "guiaTransporteId" });
  PruebaEntrega.belongsTo(DocumentoEntrega, {
    foreignKey: "documentoEntregaId",
  });

  User.hasOne(Token, {
    foreignKey: {
      field: "user_id",
    },
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  });
  User.hasOne(Cliente, {
    foreignKey: "userId",
  });
};

module.exports = associations;
