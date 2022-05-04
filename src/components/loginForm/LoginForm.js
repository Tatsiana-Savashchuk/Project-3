import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginVerification } from '../../api/loginVerification';
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

  return (
    <div className="login-form">
      <p className="uppercase bold">Login</p>
      <input type="text" className="login-form__input login" onChange={onLoginChange} />
      <p className="uppercase bold">Password</p>
      <input type="password" className="login-form__input password" onChange={onPasswordChange} />
      <br /><button className="uppercase login-form__button" onClick={loginVerification(login, password, navigate)}>Sign in</button>
    </div>
  );
};
