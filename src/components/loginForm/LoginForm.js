import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginAuthentication } from '../../api/authentication';
import { Button } from '../button/Button';
import { STORAGE_FIELDS } from '../../utils/storageData';
import './LoginForm.css';

export const LoginForm = () => {
  const navigate = useNavigate();

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const onLoginChange = (e) => {
    setLogin(e.target.value);
  };

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const verification = (login, password, navigate) => async () => {
    if (login && password) {
      const { statusCode, message } = await loginAuthentication(login, password);
        if (statusCode === 200) {
          localStorage.setItem(STORAGE_FIELDS.ACTIVE, login);
          navigate(-1);
        } else {
          alert(message);
        }
    } else {
        alert('Wrong login or password');
    }
  }
  
  return (
    <div className="login-form">
      <p className="uppercase bold">Login</p>
      <input type="text" className="login-form__input login" onChange={onLoginChange} />
      <p className="uppercase bold">Password</p>
      <input type="password" className="login-form__input password" onChange={onPasswordChange} />
      <br />{<Button className="uppercase login-form__button" onClickFuction={verification(login, password, navigate)} buttonName='Sign in' />}
    </div>
  );
};
