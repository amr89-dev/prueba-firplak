const documentoEntregaRouter = require("express").Router();
const validatorHandler = require("../middlewares/validator.handler");
const DocumentoEntregaService = require("../services/documentoEntrega.service");
const service = new DocumentoEntregaService();
const {
  createDocumentoEntregaSchema,
  getDocumentoEntregaSchema,
  updateDocumentoEntregaSchema,
} = require("../middlewares/validationSchemas/documentoEntrega.schema");

documentoEntregaRouter.get("/", async (req, res, next) => {
  try {
    const documentosEntrega = await service.find();
    res.status(200).json(documentosEntrega);
  } catch (err) {
    next(err);
  }
});

documentoEntregaRouter.post(
  "/",
  validatorHandler(createDocumentoEntregaSchema, "body"),
  async (req, res, next) => {
    try {
      const data = req.body;
      const documentoEntrega = await service.create(data);
      res.status(201).json(documentoEntrega);
    } catch (err) {
      next(err);
    }
  }
);

documentoEntregaRouter.get(
  "/:id",
  validatorHandler(getDocumentoEntregaSchema, "params"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const documentoEntrega = await service.findOne(id);
      res.status(200).json(documentoEntrega);
    } catch (err) {
      next(err);
    }
  }
);

documentoEntregaRouter.put(
  "/:id",
  validatorHandler(getDocumentoEntregaSchema, "params"),
  validatorHandler(updateDocumentoEntregaSchema, "body"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const changes = req.body;
      const documentoEntrega = await service.update(id, changes);
      res.status(200).json({
        documentoEntrega,
        message: "El documento de entrega ha sido actualizado correctamente",
      });
    } catch (err) {
      next(err);
    }
  }
);

documentoEntregaRouter.delete(
  "/:id",
  validatorHandler(getDocumentoEntregaSchema, "params"),
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

module.exports = documentoEntregaRouter;
