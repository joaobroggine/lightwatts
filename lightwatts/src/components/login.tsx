"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginTemplate() {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const userData = localStorage.getItem("user");
    if (!userData) {
      setError("Usuário não encontrado.");
      return;
    }

    const user = JSON.parse(userData);

    if (user.email === email && user.password === password) {
      setError(null);
      // Redirecionar para a página de formulário
      router.push("/form");
    } else {
      setError("E-mail ou senha incorretos.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen px-6 relative">
      <div
        className="w-full max-w-sm p-8 border border-white/30 rounded-lg shadow-lg backdrop-blur-md bg-white/10"
      >
        <h2 className="text-3xl text-center font-lulo text-black mb-6">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-black">
              E-mail
            </label>
            <input
              id="email"
              type="email"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-black text-black rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>
          <div>
            <label htmlFor="senha" className="block text-sm font-medium text-black">
              Senha
            </label>
            <input
              id="senha"
              type="password"
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-black text-black rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>
          {/* Espaço reservado para a mensagem de erro */}
          <div className="h-6 overflow-hidden">
            {error && <p className="text-red-500 text-sm">{error}</p>}
          </div>
          <div>
            <button
              type="submit"
              className="w-full py-2 bg-black text-white font-bold rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black"
            >
              Entrar
            </button>
          </div>
        </form>
        <div className="mt-4 text-center text-sm text-black">
          <span>Não tem uma conta? </span>
          <Link href="/auth/signup" className="font-medium text-blue-500 hover:text-blue-700">
            Crie sua conta
          </Link>
        </div>
      </div>
    </div>
  );
}
