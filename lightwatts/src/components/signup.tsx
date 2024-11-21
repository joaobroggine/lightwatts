"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function SignupTemplate() {
  const router = useRouter();
  const [nome, setNome] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!nome || !email || !password || !confirmPassword) {
      setError("Preencha todos os campos.");
      return;
    }

    if (password !== confirmPassword) {
      setError("As senhas não coincidem.");
      return;
    }

    setError(null); // Limpa erros antes de prosseguir

    const userData = { nome, email, password };
    setLoading(true);

    try {
      localStorage.setItem("user", JSON.stringify(userData));
      setLoading(false);
      router.push("/auth/login");
    } catch (error) {
      console.error("Erro ao salvar os dados no localStorage:", error); // Log detalhado para depuração
      setError("Erro ao salvar os dados. Tente novamente."); // Mensagem genérica para o usuário
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
              type="text"
              placeholder="Digite seu nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
              className="mt-1 block w-full px-4 py-2 border border-black text-black rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-black">E-mail</label>
            <input
              id="email"
              type="email"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 block w-full px-4 py-2 border border-black text-black rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-black">Senha</label>
            <input
              id="password"
              type="password"
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 block w-full px-4 py-2 border border-black text-black rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-black">Confirmar Senha</label>
            <input
              id="confirmPassword"
              type="password"
              placeholder="Confirme sua senha"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="mt-1 block w-full px-4 py-2 border border-black text-black rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>
          {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
          <div>
            <button
              type="submit"
              className="w-full py-2 bg-black text-white font-bold rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black"
              disabled={loading}
              aria-busy={loading}
            >
              {loading ? "Cadastrando..." : "Cadastrar"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}