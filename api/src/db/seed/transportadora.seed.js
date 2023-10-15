const Transportadora = require("../models/trasportadora.model");

const empresasTransporte = [
  {
    nombre: "Transporte Rápido SA",
    telefono: "+1-123-456-7890",
    email: "info@transporterapido.com",
    nit: "12345-6",
  },
  {
    nombre: "Logística Express Inc.",
    telefono: "+1-987-654-3210",
    email: "contacto@logisticaexpress.com",
    nit: "98765-4",
  },
  {
    nombre: "Envíos Seguros SRL",
    telefono: "+1-555-555-5555",
    email: "info@enviosseguros.com",
    nit: "54321-9",
  },
  {
    nombre: "Carga Veloz SAS",
    telefono: "+1-111-222-3333",
    email: "cargaveloz@email.com",
    nit: "98765-0",
  },
];

const loadTrasportadoras = async () => {
  try {
    let count = await Transportadora.count();
    if (count <= 0) {
      await Transportadora.bulkCreate(empresasTransporte);
      console.log("Transportadoras creadas exitosamente");
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = loadTrasportadoras;
