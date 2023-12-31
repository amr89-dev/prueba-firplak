const server = require("./src/app");
const associations = require("./src/db/associations");
const db = require("./src/db/db");
const loadClientes = require("./src/db/seed/clientes.seed");
const loadDocumentos = require("./src/db/seed/documentos.seed");
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
    await loadClientes();
    await loadDocumentos();

    server.listen(PORT, () => {
      console.log(`Servidor levantado en el puerto ${PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
};

main();
