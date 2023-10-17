import { createContext, useEffect, useState } from "react";
import {
  removeToken,
  reqNewAccessToken,
  retrieveUserInfo,
} from "../services/api";

export const AuthContext = createContext();
//eslint-disable-next-line
const AuthContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [accessToken, setAccessToken] = useState(null);
  const [user, setUser] = useState({});
  useEffect(() => {
    checkAuth();
  }, []);
  const getAccessToken = () => {
    return accessToken;
  };
  const getRefreshToken = () => {
    const refreshToken = localStorage.getItem("token");
    if (refreshToken) {
      return refreshToken;
    } else {
      return null;
    }
  };
  const saveUser = (data) => {
    setAccessToken(data.accessToken);
    setUser(data.user);
    localStorage.setItem("token", JSON.stringify(data.refreshToken));
    setIsAuthenticated(true);
  };

  const checkAuth = async () => {
    try {
      if (accessToken) {
        const userInfo = await retrieveUserInfo(accessToken);
        setUser(userInfo);
        setAccessToken(accessToken);
        setIsAuthenticated(true);
      } else {
        const refreshToken = getRefreshToken();

        if (refreshToken) {
          const newAccesData = await reqNewAccessToken(refreshToken);
          if (newAccesData.error) {
            throw new Error();
          }
          saveUser(newAccesData);
          return;
        }
      }
    } catch (err) {
      localStorage.removeItem("token");
      setIsAuthenticated(false);
    }
  };

  const logOut = async () => {
    try {
      const token = getAccessToken();
      await removeToken(token);
      setUser({});
      localStorage.removeItem("token");
      setIsAuthenticated(false);
    } catch (err) {
      console.log(err);
    }
  };

  const data = {
    isAuthenticated,
    user,
    getAccessToken,
    saveUser,
    checkAuth,
    logOut,
  };
  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
