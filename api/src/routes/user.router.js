const express = require("express");

const UserService = require("./../services/user.service");
const validatorHandler = require("./../middlewares/validator.handler");
const {
  updateUserSchema,
  createUserSchema,
  getUserSchema,
} = require("../middlewares/validationSchemas/user.schema");

const router = express.Router();
const service = new UserService();

router.get("/", async (req, res, next) => {
  try {
    const users = await service.find();
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
});

router.get(
  "/:id",
  validatorHandler(getUserSchema, "params"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const user = await service.findOne(id);
      res.status(201).json(user);
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  "/",
  validatorHandler(createUserSchema, "body"),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newUser = await service.create(body);
      res.status(201).json(newUser);
    } catch (error) {
      next(error);
    }
  }
);

router.patch(
  "/:id",
  validatorHandler(getUserSchema, "params"),
  validatorHandler(updateUserSchema, "body"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const user = await service.update(id, body);
      res.status(201).json({
        user,
        message: "El usuario ha sido actualizado correctamente",
      });
    } catch (error) {
      next(error);
    }
  }
);

router.delete(
  "/:id",
  validatorHandler(getUserSchema, "params"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      await service.delete(id);
      res.status(201).json({
        message: "El usuario ha sido eliminado correctamente",
      });
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
