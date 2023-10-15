const Joi = require("joi");

const id = Joi.string().uuid();
const tipoPrueba = Joi.string();
const guia_transporte_id = Joi.number().integer();
const documento_entrega_id = Joi.number().integer();
const novedades = Joi.string();

const createPruebaEntregaSchema = Joi.object({
  tipoPrueba: tipoPrueba.required(),
  guia_transporte_id: guia_transporte_id.required(),
  documento_entrega_id: documento_entrega_id.required(),
  novedades: novedades,
});

const updatePruebaEntregaSchema = Joi.object({
  tipoPrueba: tipoPrueba,
  guia_transporte_id: guia_transporte_id,
  documento_entrega_id: documento_entrega_id,
  novedades: novedades,
});

const getPruebaEntregaSchema = Joi.object({
  id: id.required(),
});

module.exports = {
  createPruebaEntregaSchema,
  updatePruebaEntregaSchema,
  getPruebaEntregaSchema,
};
