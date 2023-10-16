const Joi = require("joi");

const id = Joi.string().uuid();
const tipoPrueba = Joi.string();
const guiaId = Joi.string().uuid();
const documentoEntregaId = Joi.string().uuid();
const novedades = Joi.string();

const createPruebaEntregaSchema = Joi.object({
  tipoPrueba: tipoPrueba.required(),
  guiaId: guiaId.required(),
  documentoEntregaId: documentoEntregaId.required(),
  novedades: novedades,
});

const updatePruebaEntregaSchema = Joi.object({
  tipoPrueba: tipoPrueba,
  guiaId: guiaId,
  documentoEntregaId: documentoEntregaId,
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
