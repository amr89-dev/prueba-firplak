const Joi = require("joi");

const id = Joi.string().uuid();
const urlImagen = Joi.string().uri();
const guiaId = Joi.string().uuid();
const documentoEntregaId = Joi.string().uuid();
const novedades = Joi.string();

const createPruebaEntregaSchema = Joi.object({
  urlImagen: urlImagen.required(),
  guiaId: guiaId.required(),

  novedades,
});

const updatePruebaEntregaSchema = Joi.object({
  urlImagen,
  guiaId,
  documentoEntregaId,
  novedades,
});

const getPruebaEntregaSchema = Joi.object({
  id: id.required(),
});

module.exports = {
  createPruebaEntregaSchema,
  updatePruebaEntregaSchema,
  getPruebaEntregaSchema,
};
