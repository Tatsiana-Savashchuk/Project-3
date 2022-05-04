import { Navigate } from "react-router-dom";

export const RequiredNonAuthorization = ({ children }) => {
  if (localStorage.getItem('active')) {
    return <Navigate to="/" replace />;
  }
  return children;
}
