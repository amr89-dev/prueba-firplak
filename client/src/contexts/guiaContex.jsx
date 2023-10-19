import { createContext, useEffect, useState } from "react";
import { crearGuia, getGuias, patchGuia } from "../services/api";

export const GuiaContext = createContext();
//eslint-disable-next-line
const GuiaContextProvider = ({ children }) => {
  const [guias, setGuias] = useState([]);
  useEffect(() => {
    saveGuias();
  }, []);

  const generateGuia = async (data) => {
    await crearGuia(data);
    await saveGuias();
  };

  const updateGuia = async (id, data) => {
    await patchGuia(id, data);
    await saveGuias();
  };
  const saveGuias = async () => {
    const guias = await getGuias();
    setGuias(guias);
  };
  const data = { guias, generateGuia, updateGuia };
  return <GuiaContext.Provider value={data}>{children}</GuiaContext.Provider>;
};

export default GuiaContextProvider;
