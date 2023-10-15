const pruebaEntregaRouter = require("express").Router();
const validatorHandler = require("../middlewares/validator.handler");
const PruebaEntregaService = require("../services/pruebaEntrega.service");
const service = new PruebaEntregaService();
const {
  createPruebaEntregaSchema,
  getPruebaEntregaSchema,
  updatePruebaEntregaSchema,
} = require("../middlewares/validationSchemas/pruebaEntrega.schema");

pruebaEntregaRouter.get("/", async (req, res, next) => {
  try {
    const pruebasEntrega = await service.find();
    res.status(200).json(pruebasEntrega);
  } catch (err) {
    next(err);
  }
});

pruebaEntregaRouter.post(
  "/",
  validatorHandler(createPruebaEntregaSchema, "body"),
  async (req, res, next) => {
    try {
      const data = req.body;
      const pruebaEntrega = await service.create(data);
      res.status(201).json(pruebaEntrega);
    } catch (err) {
      next(err);
    }
  }
);

pruebaEntregaRouter.get(
  "/:id",
  validatorHandler(getPruebaEntregaSchema, "params"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const pruebaEntrega = await service.findOne(id);
      res.status(200).json(pruebaEntrega);
    } catch (err) {
      next(err);
    }
  }
);

pruebaEntregaRouter.put(
  "/:id",
  validatorHandler(getPruebaEntregaSchema, "params"),
  validatorHandler(updatePruebaEntregaSchema, "body"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const changes = req.body;
      const pruebaEntrega = await service.update(id, changes);
      res.status(200).json({
        pruebaEntrega,
        message: "La prueba de entrega ha sido actualizada correctamente",
      });
    } catch (err) {
      next(err);
    }
  }
);

pruebaEntregaRouter.delete(
  "/:id",
  validatorHandler(getPruebaEntregaSchema, "params"),
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

module.exports = pruebaEntregaRouter;
