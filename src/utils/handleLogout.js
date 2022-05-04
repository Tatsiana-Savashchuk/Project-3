import { removeStorageItem } from "./storageData";

export const handleLogout = () => {
  removeStorageItem('active');
};
