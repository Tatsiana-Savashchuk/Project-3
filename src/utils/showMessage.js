export const showMessage = (message, duration = 2000) => {
  localStorage.setItem('message', message);
  localStorage.setItem('showMessage', 'true');
  window.dispatchEvent(new Event("storage"));
  setTimeout(() => {
    localStorage.setItem('showMessage', 'false');
    localStorage.removeItem('message');
    window.dispatchEvent(new Event("storage"));
  }, duration);
}
