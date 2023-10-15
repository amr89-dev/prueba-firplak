const express = require("express");
const cors = require("cors");
const routerApi = require("./routes/index.router");
const {
  errorLog,
  errorHandler,
  boomErrorHandler,
  ormErrorHandler,
} = require("./middlewares/error.handler");

const server = express();

server.use(express.json());
const ACCEPTED_ORIGINS = ["http://localhost:3001"];
const corsOptions = {
  origin: (origin, callback) => {
    console.log(origin);
    if (ACCEPTED_ORIGINS.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};
server.use(cors(corsOptions));
require("./utils/auth/index");
routerApi(server);

server.use(errorLog);
server.use(ormErrorHandler);
server.use(boomErrorHandler);
server.use(errorHandler);

module.exports = server;
