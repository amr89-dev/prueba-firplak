import { createContext, useEffect, useState } from "react";
import { getTransportadoras } from "../services/api";

export const TransportadoraContext = createContext();
//eslint-disable-next-line
const TransportadoraContextProvider = ({ children }) => {
  const [transportadoras, setTransportadoras] = useState([]);

  const saveTransportadoras = async () => {
    const transportadoras = await getTransportadoras();
    setTransportadoras(transportadoras);
  };

  useEffect(() => {
    saveTransportadoras();
  }, []);

  const data = { transportadoras };
  return (
    <TransportadoraContext.Provider value={data}>
      {children}
    </TransportadoraContext.Provider>
  );
};

export default TransportadoraContextProvider;
