import LoginForm from '../components/Auth/LoginForm';
import '../styles/login.css';

const LoginPage = () => {
  return (
    <div className='container'>
      <div className='content'>
        <h1 className='title'>Login Hortifruti</h1>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;