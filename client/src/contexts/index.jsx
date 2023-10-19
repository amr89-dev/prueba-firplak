import AuthContextProvider from "./authContex";
import ClientsContextProvider from "./clientsContex";
import DocumentContextProvider from "./documentoContext";
import ErrorLoadingProvider from "./errorLoadingContex";
import GuiaContextProvider from "./guiaContex";
import TransportadoraContextProvider from "./transportadorasContext";

//eslint-disable-next-line
const MainContextProvider = ({ children }) => {
  return (
    <AuthContextProvider>
      <DocumentContextProvider>
        <GuiaContextProvider>
          <ClientsContextProvider>
            <TransportadoraContextProvider>
              <ErrorLoadingProvider>{children}</ErrorLoadingProvider>
            </TransportadoraContextProvider>
          </ClientsContextProvider>
        </GuiaContextProvider>
      </DocumentContextProvider>
    </AuthContextProvider>
  );
};

export default MainContextProvider;
