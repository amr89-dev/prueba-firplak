const Joi = require("joi");

const id = Joi.string().uuid();
const fechaDespacho = Joi.date().iso();
const fechaEntrega = Joi.date().iso();
const numeroConsecutivo = Joi.string();
const clienteId = Joi.string().uuid();
const destino = Joi.string();
const guiaId = Joi.string().uuid();
const productos = Joi.string();

const createDocumentoEntregaSchema = Joi.object({
  fechaDespacho: fechaDespacho.required(),
  clienteId: clienteId.required(),
  destino: destino.required(),
  productos,
});

const updateDocumentoEntregaSchema = Joi.object({
  fechaDespacho,
  fechaEntrega,
  numeroConsecutivo,
  clienteId,
  destino,
  guiaId,
  productos,
});

const getDocumentoEntregaSchema = Joi.object({
  id: id.required(),
});

module.exports = {
  createDocumentoEntregaSchema,
  updateDocumentoEntregaSchema,
  getDocumentoEntregaSchema,
};
