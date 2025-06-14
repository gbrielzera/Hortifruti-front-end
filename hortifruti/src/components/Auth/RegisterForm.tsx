/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function RegisterForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [role, setRole] = useState("USER");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const navigate = useNavigate();

  const validar = () => {
    const novoErros: { [key: string]: string } = {};
    if (!username.trim()) novoErros.username = "Usuário é obrigatório";
    if (!email.includes("@")) novoErros.email = "Email inválido";
    if (senha.length < 6) novoErros.senha = "Senha deve ter ao menos 6 caracteres";
    return novoErros;
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    const validados = validar();
    setErrors(validados);
    if (Object.keys(validados).length > 0) return;

    try {
      await axios.post("http://localhost:3000/auth/register", {
        username,
        email,
        senha,
        role,
      });
      alert("Cadastro realizado com sucesso!");
      navigate("/login");
    } catch (error: any) {
      alert("Erro no cadastro: " + (error.response?.data?.message || "erro"));
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <input
        type="text"
        placeholder="Usuário"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className={errors.username ? "error" : ""}
      />
      {errors.username && <p className="error-text">{errors.username}</p>}

      <input
        type="email"
        placeholder="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={errors.email ? "error" : ""}
      />
      {errors.email && <p className="error-text">{errors.email}</p>}

      <input
        type="password"
        placeholder="Senha"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
        className={errors.senha ? "error" : ""}
      />
      {errors.senha && <p className="error-text">{errors.senha}</p>}

      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="USER">Usuário</option>
        <option value="ENTREGADOR">Entregador</option>
        <option value="LOJISTA">Lojista</option>
      </select>

      <button type="submit">Cadastrar</button>

      <div className="text-center mt-3 text-sm">
        <p>Já tem uma conta? 👇</p>
        <button
          type="button"
          onClick={() => navigate("/login")}
          className="mt-1 text-green-600 hover:underline font-semibold"
        >
          Faça login
        </button>
      </div>
    </form>
  );
}
