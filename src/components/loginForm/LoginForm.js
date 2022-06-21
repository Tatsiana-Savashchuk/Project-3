import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginAuthentication } from '../../api/authentication';
import { Button } from '../button/Button';
import { Input } from '../input/Input';
import { STORAGE_FIELDS } from '../../constants/common';
import { COLORS } from '../../assets/colors/colors';
import styled from 'styled-components';

const StyledLoginForm = styled.div`
  text-align: center;
  color: ${COLORS.MATRIX};
`;

const InputName = styled.p`
  text-transform: uppercase;
  font-weight: bold;
`;

const LoginInput = styled(Input)`
  border-color: ${COLORS.MACARONI_AND_CHEESE};
  color: ${COLORS.MACARONI_AND_CHEESE};
`;

const ButtonWrapper = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
`;

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
    <StyledLoginForm>
      <InputName>Login</InputName>
      <LoginInput type="text" onChangeFunction={onLoginChange} disabled={isloading} />
      <InputName>Password</InputName>
      <LoginInput type="password" onChangeFunction={onPasswordChange} disabled={isloading} />
      <ButtonWrapper>
        <Button onClickFuction={verification} text='Sign in' uppercase isLoading={isloading} />
      </ButtonWrapper>
    </StyledLoginForm>
  );
};
