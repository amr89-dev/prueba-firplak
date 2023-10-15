const guiaRouter = require("express").Router();
const validatorHandler = require("../middlewares/validator.handler");
const GuiaTransporteService = require("../services/guia.service");
const service = new GuiaTransporteService();
const {
  createGuiaSchema,
  getGuiaTransporteSchema,
  updateGuiaTransporteSchema,
} = require("../middlewares/validationSchemas/guia.schema");

guiaRouter.get("/", async (req, res, next) => {
  try {
    const guiasTransporte = await service.find();
    res.status(200).json(guiasTransporte);
  } catch (err) {
    next(err);
  }
});

guiaRouter.post(
  "/",
  validatorHandler(createGuiaSchema, "body"),
  async (req, res, next) => {
    try {
      const data = req.body;
      const guiaTransporte = await service.create(data);
      res.status(201).json(guiaTransporte);
    } catch (err) {
      next(err);
    }
  }
);

guiaRouter.get(
  "/:id",
  validatorHandler(getGuiaTransporteSchema, "params"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const guiaTransporte = await service.findOne(id);
      res.status(200).json(guiaTransporte);
    } catch (err) {
      next(err);
    }
  }
);

guiaRouter.put(
  "/:id",
  validatorHandler(getGuiaTransporteSchema, "params"),
  validatorHandler(updateGuiaTransporteSchema, "body"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const changes = req.body;
      const guiaTransporte = await service.update(id, changes);
      res.status(200).json({
        guiaTransporte,
        message: "La guía de transporte ha sido actualizada correctamente",
      });
    } catch (err) {
      next(err);
    }
  }
);

guiaRouter.delete(
  "/:id",
  validatorHandler(getGuiaTransporteSchema, "params"),
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

module.exports = guiaRouter;
