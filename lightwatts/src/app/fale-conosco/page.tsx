"use client"

import Footer from "@/components/footer";
import Header from "@/components/header";
import { useState } from "react";

export default function Contato() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    mensagem: ""
  });

  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/api/contato", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus("Mensagem enviada com sucesso!");
        setFormData({ nome: "", email: "", mensagem: "" });
      } else {
        setStatus("Erro ao enviar a mensagem.");
      }
    } catch (error) {
      console.error("Erro:", error);
      setStatus("Erro ao conectar com o servidor.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-black">
      <Header />

      {/* Seção de Introdução */}
      <section className="flex flex-col items-center justify-center py-16 mt-20 border-b border-gray-200">
        <h1 className="text-4xl font-lulo text-center">Fale Conosco</h1>
        <p className="text-gray-600 mt-4 text-center max-w-2xl">
          Tem dúvidas ou deseja saber mais? Entre em contato conosco!
        </p>
      </section>

      {/* Formulário de Contato */}
      <main className="flex-grow flex items-center justify-center p-4 sm:p-8">
        <form
          onSubmit={handleSubmit}
          className="bg-gray-100 rounded-lg shadow-lg p-6 w-full max-w-lg"
        >
          <h2 className="text-2xl font-bold text-center mb-8">Entre em contato</h2>

          {/* Nome */}
          <div className="mb-6">
            <label htmlFor="nome" className="block font-semibold mb-2">
              Nome
            </label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          {/* Email */}
          <div className="mb-6">
            <label htmlFor="email" className="block font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          {/* Mensagem */}
          <div className="mb-6">
            <label htmlFor="mensagem" className="block font-semibold mb-2">
              Mensagem
            </label>
            <textarea
              id="mensagem"
              name="mensagem"
              value={formData.mensagem}
              onChange={handleChange}
              rows={5}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          {/* Botão de Enviar */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-black text-white font-semibold py-3 px-8 rounded hover:bg-gray-800 transition duration-300"
            >
              Enviar
            </button>
          </div>

          {/* Mensagem de Status */}
          {status && (
            <p className="text-center mt-4 text-red-500">{status}</p>
          )}
        </form>
      </main>

      <Footer />
    </div>
  );
}
