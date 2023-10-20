const Cliente = require("../models/cliente.model");
const DocumentoEntrega = require("../models/documentoEntrega.model");

const documentos = [
  {
    clienteId: "",
    fechaDespacho: "2024-01-16",
    destino: "Medellin",
    productos: "Griferías",
  },
  {
    clienteId: "",
    fechaDespacho: "2024-01-16",
    destino: "Envigado",
    productos: "Lavaderos",
  },
  {
    clienteId: "",
    fechaDespacho: "2024-01-16",
    destino: "Niquia",
    productos: "Baldosas",
  },
  {
    clienteId: "",
    fechaDespacho: "2024-01-16",
    destino: "Itagüi",
    productos: "Lavaderos",
  },
  {
    clienteId: "",
    fechaDespacho: "2024-01-16",
    destino: "Niquia",
    productos: "Griferías",
  },
  {
    clienteId: "",
    fechaDespacho: "2024-01-16",
    destino: "Envigado",
    productos: "Espejos",
  },
  {
    clienteId: "",
    fechaDespacho: "2024-01-16",
    destino: "La Estrella",
    productos: "Griferías",
  },
  {
    clienteId: "",
    fechaDespacho: "2024-01-16",
    destino: "Niquia",
    productos: "Griferías",
  },
  {
    clienteId: "",
    fechaDespacho: "2024-01-16",
    destino: "Envigado",
    productos: "Griferías",
  },
  {
    clienteId: "",
    fechaDespacho: "2024-01-16",
    destino: "Niquia",
    productos: "Espejos",
  },
];

const loadDocumentos = async () => {
  try {
    const reqId = await Cliente.findAll({
      attributes: ["id"],
    });
    const clienteIds = reqId.map((cliente) => {
      return cliente.dataValues.id;
    });

    const docWithId = documentos.map((doc) => {
      return {
        ...doc,
        clienteId: clienteIds[Math.floor(Math.random() * clienteIds.length)],
        codVerificacion: Date.now().toString(36),
      };
    });

    if (docWithId.length <= 0) {
      throw new Error("No se encontrarlos clientes");
    }
    const count = await DocumentoEntrega.count();

    if (count <= 0) {
      docWithId.forEach(async (doc) => {
        const newDoc = await DocumentoEntrega.create(doc, {
          include: ["cliente"],
        });
      });
      console.log("Documentos creados exitosamente");
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = loadDocumentos;
