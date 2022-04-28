import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PageBuilder } from '../../components/pageBuilder/PageBuilder.js';
import { PREFIX } from '../../constants/common.js';
import './Login.css';

const LoginForm = () => {

  const navigate = useNavigate();

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const onLoginChange = (e) => {
    setLogin(e.target.value);
  };

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="login-form">
      <p className="uppercase bold">Login</p>
      <input type="text" className="login-form__input login" onChange={onLoginChange} />
      <p className="uppercase bold">Password</p>
      <input type="password" className="login-form__input password" onChange={onPasswordChange} />
      <br /><button className="uppercase login-form__button" onClick={getLogin(login, password, navigate)}>Sign in</button>
    </div>
  );
};

const getLogin = (login, password, navigate) => async () => {

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
            localStorage.setItem('active', login);
            navigate(-1);
          } else {
            alert(result.message);
          }
      })
  } else {
      alert('Wrong login or password');
  }
}

export const Login = () => {
  return (
    <PageBuilder main={<LoginForm />} />
  );
};
