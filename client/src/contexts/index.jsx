import AuthContextProvider from "./authContex";
import ClientsContextProvider from "./clientsContex";
import ErrorLoadingProvider from "./errorLoadingContex";
import TransportadoraContextProvider from "./transportadorasContext";

//eslint-disable-next-line
const MainContextProvider = ({ children }) => {
  return (
    <AuthContextProvider>
      <ClientsContextProvider>
        <TransportadoraContextProvider>
          <ErrorLoadingProvider>{children}</ErrorLoadingProvider>
        </TransportadoraContextProvider>
      </ClientsContextProvider>
    </AuthContextProvider>
  );
};

export default MainContextProvider;
