import { PREFIX } from '../constants/common.js';
import { addStorageItem } from '../utils/storageData.js';

export const loginVerification = (login, password, navigate) => async () => {

  if (login && password) {
    await fetch(PREFIX + 'user/login', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        login,
        password,
      }),
    })
      .then(result => result.json())
      .then((result) => {
          if (result.statusCode === 200) {
            addStorageItem('active', login);
            navigate(-1);
          } else {
            alert(result.message);
          }
      })
  } else {
      alert('Wrong login or password');
  }
}
