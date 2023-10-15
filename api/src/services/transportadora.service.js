const boom = require("@hapi/boom");
const Transportadora = require("../db/models/trasportadora.model");

class TransportadoraService {
  constructor() {}

  async find() {
    const rta = await Transportadora.findAll();
    return rta;
  }

  async findOne(id) {
    const transportadora = await Transportadora.findByPk(id);
    if (!transportadora) {
      throw boom.notFound("Transportadora not found");
    }
    return transportadora;
  }

  async create(data) {
    const newTransportadora = await Transportadora.create(data);
    return newTransportadora;
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
