import { PREFIX } from '../constants/common.js';

export const loginAuthentication = async (login, password) => {
  let queryResult;
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
      queryResult = result;
    })
  return queryResult;
}
