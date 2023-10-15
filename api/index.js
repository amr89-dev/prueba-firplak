const server = require("./src/app");
const associations = require("./src/db/associations");
const db = require("./src/db/db");
const loadTrasportadoras = require("./src/db/seed/transportadora.seed");
require("dotenv").config();

const PORT = process.env.PORT || 3001;

const main = async () => {
  try {
    await db.authenticate();
    await associations();
    await db.sync({ force: false });
    console.log("La conexion a la base de datos es exitosa");
    await loadTrasportadoras();

    server.listen(PORT, () => {
      console.log(`Servidor levantado en el puerto ${PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
};

main();
