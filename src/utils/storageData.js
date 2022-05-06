export const STORAGE_FIELDS = { ACTIVE: 'active' };

export const isUserLogged = () => {
  return Boolean(localStorage.getItem(STORAGE_FIELDS.ACTIVE));
};

export const logout = () => {
  localStorage.removeItem(STORAGE_FIELDS.ACTIVE);
};
