const bcrypt = require("bcrypt");

const Transportadora = require("../models/trasportadora.model");

const empresasTransporte = [
  {
    nombre: "Transporte Rápido SA",
    telefono: "+1-123-456-7890",
    nit: "12345-6",
    user: {
      email: "info@transporterapido.com",
      password: "contraseña123",
      role: "Transportadora",
    },
  },
  {
    nombre: "Logística Express Inc.",
    telefono: "+1-987-654-3210",
    nit: "98765-4",
    user: {
      email: "contacto@logisticaexpress.com",
      password: "password123",
      role: "Transportadora",
    },
  },
  {
    nombre: "Envíos Seguros SRL",
    telefono: "+1-555-555-5555",
    nit: "54321-9",
    user: {
      email: "info@enviosseguros.com",
      password: "segura123",
      role: "Transportadora",
    },
  },
  {
    nombre: "Carga Veloz SAS",
    telefono: "+1-111-222-3333",
    nit: "98765-0",
    user: {
      email: "cargaveloz@email.com",
      password: "veloz123",
      role: "Transportadora",
    },
  },
];
const loadTrasportadoras = async () => {
  try {
    let count = await Transportadora.count();
    if (count <= 0) {
      empresasTransporte.forEach(async (empresa) => {
        const hash = await bcrypt.hash(empresa.user.password, 10);
        const newData = {
          ...empresa,
          user: {
            ...empresa.user,
            password: hash,
          },
        };
        const newEmpresa = await Transportadora.create(newData, {
          include: ["user"],
        });
      });
      console.log("Clientes creadas exitosamente");
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = loadTrasportadoras;
