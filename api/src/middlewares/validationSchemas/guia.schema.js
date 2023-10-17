const Joi = require("joi");

const id = Joi.string().uuid();
const transportadoraId = Joi.string().uuid();
const fechaDespacho = Joi.string();
const destino = Joi.string();
const clienteId = Joi.string().uuid();
const documentoEntregaId = Joi.array().items(Joi.string().uuid()).min(1);

const createGuiaSchema = Joi.object({
  transportadoraId: transportadoraId.required(),
  fechaDespacho: fechaDespacho.required(),
  destino: destino.required(),
  clienteId: clienteId.required(),
  documentoEntregaId: documentoEntregaId.required(),
});

const updateGuiaSchema = Joi.object({
  fechaDespacho: fechaDespacho,
  clienteId: clienteId,
  documentoEntregaId: documentoEntregaId,
});

const getGuiaSchema = Joi.object({
  id: id.required(),
});

module.exports = { createGuiaSchema, updateGuiaSchema, getGuiaSchema };
