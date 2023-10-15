const boom = require("@hapi/boom");
const PruebaEntrega = require("../db/models/pruebaEntrega.model");

class PruebaEntregaService {
  constructor() {}

  async find() {
    const rta = await PruebaEntrega.findAll();
    return rta;
  }

  async findOne(id) {
    const pruebaEntrega = await PruebaEntrega.findByPk(id);
    if (!pruebaEntrega) {
      throw boom.notFound("Prueba de entrega not found");
    }
    return pruebaEntrega;
  }

  async create(data) {
    const newPruebaEntrega = await PruebaEntrega.create(data);
    return newPruebaEntrega;
  }

  async update(id, changes) {
    const pruebaEntrega = await this.findOne(id);
    const rta = await pruebaEntrega.update(changes);
    return rta;
  }

  async delete(id) {
    const pruebaEntrega = await this.findOne(id);
    await pruebaEntrega.destroy();
    return { rta: true };
  }
}

module.exports = PruebaEntregaService;
