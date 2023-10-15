const boom = require("@hapi/boom");
const Guia = require("../db/models/guia.model");

class GuiaService {
  constructor() {}

  async find() {
    const rta = await Guia.findAll();
    return rta;
  }

  async findOne(id) {
    const guiaTransporte = await Guia.findByPk(id);
    if (!guiaTransporte) {
      throw boom.notFound("Guía de transporte not found");
    }
    return guiaTransporte;
  }

  async create(data) {
    const newGuiaTransporte = await Guia.create(data);
    return newGuiaTransporte;
  }

  async update(id, changes) {
    const guiaTransporte = await this.findOne(id);
    const rta = await guiaTransporte.update(changes);
    return rta;
  }

  async delete(id) {
    const guiaTransporte = await this.findOne(id);
    await guiaTransporte.destroy();
    return { rta: true };
  }
}

module.exports = GuiaService;
