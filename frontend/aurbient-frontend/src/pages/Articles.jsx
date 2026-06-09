import { Navigate } from "react-router-dom";

export default function Articles() {
  return <Navigate to="/insights" state={{ tab: "articles" }} replace />;
}
