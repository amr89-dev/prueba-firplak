const Joi = require("joi");
const { createUserSchema, updateUserSchema } = require("./user.schema");

const id = Joi.string().uuid();
const nombreCliente = Joi.string().min(3).max(30);
const telefono = Joi.string();
const userId = Joi.string().uuid();
const user = createUserSchema;

const createCustomerSchema = Joi.object({
  nombreCliente: nombreCliente.required(),
  telefono,
  user: user.required(),
});

const updateCustomerSchema = Joi.object({
  nombreCliente,
  telefono,
  user: updateUserSchema,
});
const getCustomerSchema = Joi.object({
  id: userId.required(),
});

module.exports = {
  createCustomerSchema,
  updateCustomerSchema,
  getCustomerSchema,
};
