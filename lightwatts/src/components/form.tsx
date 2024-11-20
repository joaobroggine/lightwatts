"use client";

import { useState } from "react";

interface Eletrodomestico {
  nome: string;
  marca: string;
  tipo: string;
  horasDia: number;
}

const Form: React.FC = () => {
  const [nome, setNome] = useState("");
  const [marca, setMarca] = useState("");
  const [tipo, setTipo] = useState("");
  const [horasDia, setHorasDia] = useState("");

  // Função para salvar os dados no localStorage
  const saveToLocalStorage = (data: Eletrodomestico) => {
    const storedEletrodomesticos = JSON.parse(localStorage.getItem("eletrodomesticos") || "[]");
    storedEletrodomesticos.push(data);
    localStorage.setItem("eletrodomesticos", JSON.stringify(storedEletrodomesticos));
  };

  // Função onSubmit definida no próprio componente
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newEletrodomestico = { nome, marca, tipo, horasDia: parseFloat(horasDia) };
    saveToLocalStorage(newEletrodomestico);
    setNome("");
    setMarca("");
    setTipo("");
    setHorasDia("");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <form
        onSubmit={handleSubmit}
        className="w-2/3 max-w-2xl flex flex-col gap-4 p-6 border border-black rounded-md"
      >
        <h1 className="text-xl font-bold text-black">Cadastrar Eletrodoméstico</h1>
        <label className="text-sm font-semibold text-black">Nome do Eletrodoméstico:</label>
        <input
          type="text"
          placeholder="Ex: Geladeira"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className="p-2 border border-black rounded focus:outline-none focus:ring-2 focus:ring-black"
          required
        />
        <label className="text-sm font-semibold text-black">Marca:</label>
        <input
          type="text"
          placeholder="Ex: Brastemp"
          value={marca}
          onChange={(e) => setMarca(e.target.value)}
          className="p-2 border border-black rounded focus:outline-none focus:ring-2 focus:ring-black"
          required
        />
        <label className="text-sm font-semibold text-black">Tipo:</label>
        <input
          type="text"
          placeholder="Ex: Microondas"
          value={tipo}
          onChange={(e) => setTipo(e.target.value)}
          className="p-2 border border-black rounded focus:outline-none focus:ring-2 focus:ring-black"
          required
        />
        <label className="text-sm font-semibold text-black">Horas Ligadas por Dia:</label>
        <input
          type="number"
          placeholder="Ex: 5"
          value={horasDia}
          onChange={(e) => setHorasDia(e.target.value)}
          className="p-2 border border-black rounded focus:outline-none focus:ring-2 focus:ring-black"
          required
        />
        <button
          type="submit"
          className="mt-4 bg-black text-white font-medium py-2 px-4 rounded hover:bg-gray-800 focus:outline-none"
        >
          Adicionar
        </button>
      </form>
    </div>
  );
};

export default Form;
