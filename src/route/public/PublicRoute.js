import { Navigate, Outlet } from "react-router-dom";
import Login from "../../component/Login";

function PublicRoute() {
  //   const token = localStorage.getItem("token");
  //   if (token) {
  //     const role = localStorage.getItem("role");
  //     var bytes = crypto.AES.decrypt(role, "role");
  //     var role_decode = bytes.toString(crypto.enc.Utf8);
  //   }
  return <Outlet />;
}

export default PublicRoute;
