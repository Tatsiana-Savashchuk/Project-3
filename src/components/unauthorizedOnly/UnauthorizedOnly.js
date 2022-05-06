import { Navigate } from "react-router-dom";
import { STORAGE_FIELDS } from "../../utils/storageData";

export const UnauthorizedOnly = ({ children }) => {
  if (localStorage.getItem(STORAGE_FIELDS.ACTIVE)) {
    return <Navigate to="/" replace />;
  }
  return children;
}
