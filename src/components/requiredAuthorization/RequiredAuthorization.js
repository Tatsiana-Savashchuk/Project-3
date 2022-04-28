import { Navigate } from "react-router-dom";

export const RequiredAuthorization = ({ children }) => {
  if (localStorage.getItem('active')) {
    return <Navigate to="/" replace />;
  }
  return children;
}
