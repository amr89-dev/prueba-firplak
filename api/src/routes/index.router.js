const express = require("express");

const authRouter = require("./auth.router");
const clienteRouter = require("./cliente.router");
const documentoEntregaRouter = require("./documentoEntrega.router");
const guiaRouter = require("./guia.router");
const pruebaEntregaRouter = require("./pruebaEntrega.router");
const transportadoraRouter = require("./transportadora.router");
const userRouter = require("./user.router");

const routerApi = (app) => {
  const router = express.Router();
  app.use("/api/v1", router);
  router.use("/auth", authRouter);
  router.use("/cliente", clienteRouter);
  router.use("/documento", documentoEntregaRouter);
  router.use("/guia", guiaRouter);
  router.use("/prueba", pruebaEntregaRouter);
  router.use("/transportadora", transportadoraRouter);
  router.use("/user", userRouter);
};

module.exports = routerApi;
