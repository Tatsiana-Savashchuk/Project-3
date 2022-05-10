import { STORAGE_FIELDS } from "../constants/common";

export const isUserLogged = () => {
  return Boolean(localStorage.getItem(STORAGE_FIELDS.ACTIVE));
};

export const logout = () => {
  localStorage.removeItem(STORAGE_FIELDS.ACTIVE);
};
