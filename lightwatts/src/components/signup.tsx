"use client"

import { useState, FormEvent, ChangeEvent } from "react";
import Link from "next/link";

export default function SignupTemplate() {
  const [cep, setCep] = useState<string>("");
  const [endereco, setEndereco] = useState<string>("");
  const [nome, setNome] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);  // Para gerenciar o estado de carregamento
  const [error, setError] = useState<string | null>(null);  // Para mostrar erros

  // Função para buscar o endereço via API ViaCEP
  const handleCepChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const cepValue = e.target.value;
    setCep(cepValue);

    if (cepValue.length === 8) {
      try {
        const response = await fetch(`https://viacep.com.br/ws/${cepValue}/json/`);
        const data = await response.json();

        if (data.erro) {
          setEndereco("CEP não encontrado.");
        } else {
          setEndereco(`${data.logradouro}, ${data.bairro} - ${data.localidade}`);
        }
      } catch (error) {
        setEndereco("Erro ao buscar o endereço.");
      }
    }
  };

  // Função de envio de dados para o banco
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!nome || !email || !password || !cep || !endereco) {
      alert("Preencha todos os campos.");
      return;
    }

    const userData = {
      nome,
      email,
      password,
      cep,
      endereco,
    };

    setLoading(true);  // Inicia o carregamento

    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();

      if (response.ok) {
        // Cadastro realizado com sucesso
        alert("Cadastro realizado com sucesso!");
        setLoading(false);
        // Redirecionar ou limpar os campos (opcional)
      } else {
        // Se houver erro de cadastro
        setError(data.message || "Erro ao cadastrar usuário.");
        setLoading(false);
      }
    } catch (error) {
      setError("Erro ao conectar com o servidor.");
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen px-6 relative">
      <div className="w-full max-w-md p-8 border border-white/30 rounded-lg shadow-lg backdrop-blur-md bg-white/10">
        <h2 className="text-3xl text-center font-lulo text-black mb-6">Sign Up</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-black">Nome</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Digite seu nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-black text-black rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-black">E-mail</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-black text-black rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-black">Senha</label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-black text-black rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div>
            <label htmlFor="cep" className="block text-sm font-medium text-black">CEP</label>
            <input
              id="cep"
              name="cep"
              type="text"
              value={cep}
              onChange={handleCepChange}
              placeholder="Digite seu CEP"
              className="mt-1 block w-full px-4 py-2 border border-black text-black rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div>
            <label htmlFor="endereco" className="block text-sm font-medium text-black">Endereço</label>
            <input
              id="endereco"
              type="text"
              value={endereco}
              disabled
              placeholder="Endereço será preenchido automaticamente"
              className="mt-1 block w-full px-4 py-2 border border-black text-black rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {error && <div className="text-red-500 text-sm mt-2">{error}</div>}  {/* Mensagem de erro */}

          <div>
            <button
              type="submit"
              className="w-full py-2 bg-black text-white font-bold rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black"
              disabled={loading}  // Desabilitar o botão durante o carregamento
            >
              {loading ? "Cadastrando..." : "Cadastrar"}
            </button>
          </div>
        </form>

        <div className="mt-4 text-center text-sm text-black">
          <span>Já tem uma conta? </span>
          <Link href="/auth/login" className="font-medium text-blue-500 hover:text-blue-700">
            Faça login
          </Link>
        </div>
      </div>
    </div>
  );
}
