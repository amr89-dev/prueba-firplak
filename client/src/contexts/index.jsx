import AuthContextProvider from "./authContex";
import ErrorLoadingProvider from "./errorLoadingContex";

//eslint-disable-next-line
const MainContextProvider = ({ children }) => {
  return (
    <AuthContextProvider>
      <ErrorLoadingProvider>{children}</ErrorLoadingProvider>
    </AuthContextProvider>
  );
};

export default MainContextProvider;
