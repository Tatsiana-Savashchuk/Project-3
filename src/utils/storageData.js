export const checkStorageItem = (nameItem) => {
  return Boolean(localStorage.getItem(nameItem));
}

export const addStorageItem = (nameItem, item) => {
  localStorage.setItem(nameItem, item);
}

export const removeStorageItem = (nameItem) => {
  localStorage.removeItem(nameItem);
}
