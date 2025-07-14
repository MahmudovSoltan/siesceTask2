// components/routes/PrivateRoute.tsx
import { Navigate, Outlet } from "react-router-dom";
import { getCookie } from "../utils/cookie";


const PrivateRoute = () => {
  const token = getCookie("accessToken");

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default PrivateRoute;
