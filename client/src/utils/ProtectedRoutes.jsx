import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const ProtectedRoutes = () => {
  const isAuth = useAuth();

  return isAuth.isAuthenticated ? <Outlet /> : <Navigate to={`/login`} />;
};

export default ProtectedRoutes;
