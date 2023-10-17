import { createContext, useState } from "react";

export const ErrorLoadingContext = createContext();
//eslint-disable-next-line
const ErrorLoadingProvider = ({ children }) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const data = {
    error,
    setError,
    loading,
    setLoading,
  };
  return (
    <ErrorLoadingContext.Provider value={data}>
      {children}
    </ErrorLoadingContext.Provider>
  );
};

export default ErrorLoadingProvider;
