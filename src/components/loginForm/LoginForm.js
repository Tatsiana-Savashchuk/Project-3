import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginAuthentication } from '../../api/authentication';
import { Button } from '../button/Button';
import { Input } from '../input/Input';
import { STORAGE_FIELDS } from '../../constants/common';
import './LoginForm.css';

export const LoginForm = () => {
  const navigate = useNavigate();

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [isloading, setIsLoading] = useState(false);

  const onLoginChange = (e) => {
    setLogin(e.target.value);
  };

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const verification = async () => {
    setIsLoading(true);
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
    setIsLoading(false);
  }
  
  return (
    <div className="login-form">
      <p className="uppercase bold">Login</p>
      <Input type="text" className="login-form__input login" onChangeFunction={onLoginChange} disabled={isloading} />
      <p className="uppercase bold">Password</p>
      <Input type="password" className="login-form__input password" onChangeFunction={onPasswordChange} disabled={isloading} />
      <div className='login-form__button-wrapper'>
        <Button className="login-form__button" onClickFuction={verification} text='Sign in' uppercase isLoading={isloading} />
      </div>
    </div>
  );
};
