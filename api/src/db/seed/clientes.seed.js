const bcrypt = require("bcrypt");
const Cliente = require("../models/cliente.model");

const clientes = [
  {
    nombreCliente: "Construcciones Modernas S.A.",
    user: {
      email: "info@construccionesmodernas.com",
      password: "CMpassword123",
      role: "cliente",
    },
    telefono: "+1234567890",
  },
  {
    nombreCliente: "Azulejos y Más",
    user: {
      email: "ventas@azulejosymas.com",
      password: "Azulejos123",
      role: "cliente",
    },
    telefono: "+9876543210",
  },
  {
    nombreCliente: "Obras y Reformas Integradas",
    user: {
      email: "contacto@obrasyreformas.com",
      password: "ORIpassword456",
      role: "cliente",
    },
    telefono: "+5551234567",
  },
  {
    nombreCliente: "Arquitectura Contemporánea",
    user: {
      email: "arqcontemp@arqcontemporanea.com",
      password: "ACpassword789",
      role: "cliente",
    },
    telefono: "+1112223333",
  },
  {
    nombreCliente: "Cerámicas del Este",
    user: {
      email: "info@ceramicasdeleste.com",
      password: "Ceramica123",
      role: "cliente",
    },
    telefono: "+3334445555",
  },
];
const loadClientes = async () => {
  try {
    let count = await Cliente.count();
    if (count <= 0) {
      clientes.forEach(async (cliente) => {
        const hash = await bcrypt.hash(cliente.user.password, 10);
        const newData = {
          ...cliente,
          user: {
            ...cliente.user,
            password: hash,
          },
        };
        const newCliente = await Cliente.create(newData, {
          include: ["user"],
        });
      });
      console.log("Clientes creadas exitosamente");
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = loadClientes;
