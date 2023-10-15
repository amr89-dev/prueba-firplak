const Joi = require("joi");

const id = Joi.string().uuid();
const fechaDespacho = Joi.date().iso();
const fechaEntrega = Joi.date().iso();
const numeroConsecutivo = Joi.string();
const cliente_id = Joi.number().integer();
const destino = Joi.string();
const guia_transporte_id = Joi.number().integer();

const createDocumentoEntregaSchema = Joi.object({
  fechaDespacho: fechaDespacho.required(),
  fechaEntrega: fechaEntrega.required(),
  numeroConsecutivo: numeroConsecutivo.required(),
  cliente_id: cliente_id.required(),
  destino: destino.required(),
  guia_transporte_id: guia_transporte_id.required(),
});

const updateDocumentoEntregaSchema = Joi.object({
  fechaDespacho: fechaDespacho,
  fechaEntrega: fechaEntrega,
  numeroConsecutivo: numeroConsecutivo,
  cliente_id: cliente_id,
  destino: destino,
  guia_transporte_id: guia_transporte_id,
});

const getDocumentoEntregaSchema = Joi.object({
  id: id.required(),
});

module.exports = {
  createDocumentoEntregaSchema,
  updateDocumentoEntregaSchema,
  getDocumentoEntregaSchema,
};
