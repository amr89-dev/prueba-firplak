const boom = require("@hapi/boom");
const Cliente = require("../db/models/cliente.model");
const bcrypt = require("bcrypt");

class ClienteService {
  constructor() {}
  async find() {
    const rta = await Cliente.findAll({
      include: ["user"],
    });
    return rta;
  }
  async findOne(id) {
    const user = await Cliente.findByPk(id);
    if (!user) {
      throw boom.notFound("Cliente not found");
    }
    return user;
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
    const newCliente = await Cliente.create(newData, {
      include: ["user"],
    });
    delete newCliente.user.dataValues.password;
    return newCliente;
  }
  async update(id, changes) {
    const customer = await this.findOne(id);
    const rta = await customer.update(changes);
    return rta;
  }
  async delete(id) {
    const customer = await this.findOne(id);
    await customer.destroy();
    return { rta: true };
  }
}

module.exports = ClienteService;
