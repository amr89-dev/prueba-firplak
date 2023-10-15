const Joi = require("joi");

const id = Joi.string().uuid();
const nombre = Joi.string();
const telefono = Joi.string();
const email = Joi.string().email();
const nit = Joi.string();

const createTransportadoraSchema = Joi.object({
  nombre: nombre.required(),
  telefono: telefono,
  email: email,
  nit: nit,
});

const updateTransportadoraSchema = Joi.object({
  nombre: nombre,
  telefono: telefono,
  email: email,
  nit: nit,
});

const getTransportadoraSchema = Joi.object({
  id: id.required(),
});

module.exports = {
  createTransportadoraSchema,
  updateTransportadoraSchema,
  getTransportadoraSchema,
};
