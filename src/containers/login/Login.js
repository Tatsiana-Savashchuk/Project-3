import { PageBuilder } from '../../components/pageBuilder/PageBuilder.js';
import { LoginForm } from '../../components/loginForm/LoginForm.js';

export const Login = () => {
  return (
    <PageBuilder main={<LoginForm />} />
  );
};
