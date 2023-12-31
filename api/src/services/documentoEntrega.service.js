const boom = require("@hapi/boom");
const DocumentoEntrega = require("../db/models/documentoEntrega.model");

class DocumentoEntregaService {
  constructor() {}

  async find() {
    const rta = await DocumentoEntrega.findAll({
      include: ["cliente"],
    });
    return rta;
  }

  async findOne(id) {
    const documentoEntrega = await DocumentoEntrega.findByPk(id);
    if (!documentoEntrega) {
      throw boom.notFound("Documento de entrega not found");
    }
    return documentoEntrega;
  }

  async create(data) {
    const documento = {
      ...data,
      fechaDespacho: new Date(data.fechaDespacho),
      codVerificacion: Date.now().toString(36),
    };
    const newDocumentoEntrega = await DocumentoEntrega.create(documento);
    return newDocumentoEntrega;
  }

  async update(id, changes) {
    const documentoEntrega = await this.findOne(id);
    const rta = await documentoEntrega.update(changes);
    return rta;
  }

  async delete(id) {
    const documentoEntrega = await this.findOne(id);
    await documentoEntrega.destroy();
    return { rta: true };
  }
}

module.exports = DocumentoEntregaService;
