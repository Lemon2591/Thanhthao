import Home from "../../component/Home";
import { Navigate, Outlet } from "react-router-dom";

function PrivateRoute() {
  return <Outlet />;
}

export default PrivateRoute;
