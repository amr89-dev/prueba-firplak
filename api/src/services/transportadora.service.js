const boom = require("@hapi/boom");
const bcrypt = require("bcrypt");

const Transportadora = require("../db/models/trasportadora.model");

class TransportadoraService {
  constructor() {}

  async find() {
    const rta = await Transportadora.findAll({});
    return rta;
  }

  async findOne(id) {
    const transportadora = await Transportadora.findByPk(id, {
      include: ["user"],
    });
    if (!transportadora) {
      throw boom.notFound("Transportadora not found");
    }
    delete transportadora.user.password;
    return transportadora;
  }

  async create(data) {
    const hash = await bcrypt.hash(data.user.password, 10);
    const newData = {
      ...data,
      user: {
        ...data.user,
        password: hash,
      },
    };
    const newEmpresa = await Transportadora.create(newData, {
      include: ["user"],
    });
    delete newEmpresa.user.dataValues.password;
    return newEmpresa;
  }

  async update(id, changes) {
    const transportadora = await this.findOne(id);
    const rta = await transportadora.update(changes);
    return rta;
  }

  async delete(id) {
    const transportadora = await this.findOne(id);
    await transportadora.destroy();
    return { rta: true };
  }
}

module.exports = TransportadoraService;
