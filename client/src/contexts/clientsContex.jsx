import { createContext, useEffect, useState } from "react";
import { getClients } from "../services/api";

export const ClientsContext = createContext();
//eslint-disable-next-line
const ClientsContextProvider = ({ children }) => {
  const [clientes, setClientes] = useState([]);

  const guardarClientes = async () => {
    const res = await getClients();
    setClientes(res);
  };
  const data = {
    clientes,
  };

  useEffect(() => {
    guardarClientes();
  }, []);

  return (
    <ClientsContext.Provider value={data}>{children}</ClientsContext.Provider>
  );
};

export default ClientsContextProvider;
