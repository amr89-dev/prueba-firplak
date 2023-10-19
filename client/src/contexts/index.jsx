import AuthContextProvider from "./authContex";
import ClientsContextProvider from "./clientsContex";
import ErrorLoadingProvider from "./errorLoadingContex";
import GuiaContextProvider from "./guiaContex";
import TransportadoraContextProvider from "./transportadorasContext";

//eslint-disable-next-line
const MainContextProvider = ({ children }) => {
  return (
    <AuthContextProvider>
      <GuiaContextProvider>
        <ClientsContextProvider>
          <TransportadoraContextProvider>
            <ErrorLoadingProvider>{children}</ErrorLoadingProvider>
          </TransportadoraContextProvider>
        </ClientsContextProvider>
      </GuiaContextProvider>
    </AuthContextProvider>
  );
};

export default MainContextProvider;
