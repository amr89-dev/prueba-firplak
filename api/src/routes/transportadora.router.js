const transportadoraRouter = require("express").Router();
const validatorHandler = require("../middlewares/validator.handler");
const TransportadoraService = require("../services/transportadora.service");
const service = new TransportadoraService();
const {
  createTransportadoraSchema,
  getTransportadoraSchema,
  updateTransportadoraSchema,
} = require("../middlewares/validationSchemas/transportadora.schema");

transportadoraRouter.get("/", async (req, res, next) => {
  try {
    const transportadoras = await service.find();
    res.status(200).json(transportadoras);
  } catch (err) {
    next(err);
  }
});

transportadoraRouter.post(
  "/",
  validatorHandler(createTransportadoraSchema, "body"),
  async (req, res, next) => {
    try {
      const data = req.body;
      const transportadora = await service.create(data);
      res.status(201).json(transportadora);
    } catch (err) {
      next(err);
    }
  }
);

transportadoraRouter.get(
  "/:id",
  validatorHandler(getTransportadoraSchema, "params"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const transportadora = await service.findOne(id);
      res.status(200).json(transportadora);
    } catch (err) {
      next(err);
    }
  }
);

transportadoraRouter.put(
  "/:id",
  validatorHandler(getTransportadoraSchema, "params"),
  validatorHandler(updateTransportadoraSchema, "body"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const changes = req.body;
      const transportadora = await service.update(id, changes);
      res.status(200).json({
        transportadora,
        message: "La transportadora ha sido actualizada correctamente",
      });
    } catch (err) {
      next(err);
    }
  }
);

transportadoraRouter.delete(
  "/:id",
  validatorHandler(getTransportadoraSchema, "params"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      await service.delete(id);
      res.status(204).end();
    } catch (err) {
      next(err);
    }
  }
);

module.exports = transportadoraRouter;
