import { createContext, useEffect, useState } from "react";
import { getDocumentos } from "../services/api";

export const DocumentoContext = createContext();
//eslint-disable-next-line
const DocumentContextProvider = ({ children }) => {
  const [documentos, setDocumentos] = useState([]);

  const saveDocumentos = async () => {
    const documentosFromDB = await getDocumentos();

    setDocumentos(documentosFromDB);
  };

  const data = { documentos };

  useEffect(() => {
    saveDocumentos();
  }, []);

  return (
    <DocumentoContext.Provider value={data}>
      {children}
    </DocumentoContext.Provider>
  );
};

export default DocumentContextProvider;
