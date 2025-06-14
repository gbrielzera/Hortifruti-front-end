import RegisterForm from "../components/Auth/RegisterForm";
import '../styles/register.css'

export default function RegisterPage() {
  return (
    <div className="container">
      <div className="content">
        <h2 className="title">Cadastro</h2>
        <RegisterForm />
      </div>
    </div>
  );
}
