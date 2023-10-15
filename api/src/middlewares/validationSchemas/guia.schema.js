const Joi = require("joi");

const id = Joi.string().uuid();
const numeroConsecutivo = Joi.string();
const fechaDespacho = Joi.date().iso();
const cliente_id = Joi.number().integer();
const documento_entrega_id = Joi.number().integer();

const createGuiaSchema = Joi.object({
  fechaDespacho: fechaDespacho.required(),
  cliente_id: cliente_id.required(),
  documento_entrega_id: documento_entrega_id.required(),
});

const updateGuiaSchema = Joi.object({
  numeroConsecutivo: numeroConsecutivo,
  fechaDespacho: fechaDespacho,
  cliente_id: cliente_id,
  documento_entrega_id: documento_entrega_id,
});

const getGuiaSchema = Joi.object({
  id: id.required(),
});

module.exports = { createGuiaSchema, updateGuiaSchema, getGuiaSchema };
