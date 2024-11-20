"use client";

import { useState, useEffect } from "react";
import Sidebar from "@/components/sidebar";
import { useCallback } from "react";

interface Eletrodomestico {
  marca: string;
  tipo: string;
  horasDia: number;
  id: number;
}

const EletrodomesticosPage = () => {
  const [view, setView] = useState<string>("checar");
  const [eletrodomesticos, setEletrodomesticos] = useState<Eletrodomestico[]>([]);
  const [marca, setMarca] = useState("");
  const [tipo, setTipo] = useState("");
  const [horasDia, setHorasDia] = useState("");
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [error, setError] = useState<string>("");
  const [relatorio, setRelatorio] = useState<string>("");

  // Carregar os eletrodomésticos do localStorage
  const fetchEletrodomesticos = () => {
    const storedData = localStorage.getItem("eletrodomesticos");
    if (storedData) {
      setEletrodomesticos(JSON.parse(storedData));
    }
  };

  useEffect(() => {
    fetchEletrodomesticos();
  }, [view]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(""); // Limpar erro anterior

    // Validação simples
    if (!marca || !tipo || !horasDia) {
      setError("Todos os campos são obrigatórios.");
      return;
    }

    if (isNaN(Number(horasDia)) || Number(horasDia) <= 0) {
      setError("A quantidade de horas por dia deve ser um número positivo.");
      return;
    }

    const novoProduto = {
      marca,
      tipo,
      horasDia: parseFloat(horasDia),
      id: Date.now(), // Gerar um ID único com base no timestamp
    };

    const updatedEletrodomesticos = [...eletrodomesticos, novoProduto];
    localStorage.setItem("eletrodomesticos", JSON.stringify(updatedEletrodomesticos));
    setEletrodomesticos(updatedEletrodomesticos); // Atualizar a lista local
    setView("checar"); // Voltar para checar após adicionar
    resetForm(); // Limpar o formulário
  };

  const handleDelete = (id: number) => {
    setError(""); // Limpar erro anterior

    const updatedEletrodomesticos = eletrodomesticos.filter(
      (eletrodomestico) => eletrodomestico.id !== id
    );

    if (updatedEletrodomesticos.length === eletrodomesticos.length) {
      setError("Erro ao deletar o produto. Tente novamente.");
      return;
    }

    localStorage.setItem("eletrodomesticos", JSON.stringify(updatedEletrodomesticos));
    setEletrodomesticos(updatedEletrodomesticos); // Atualizar a lista local
    setView("checar"); // Voltar para checar após deletar
  };

  const handleUpdate = () => {
    if (selectedId === null) {
      setError("Selecione um produto para atualizar.");
      return;
    }

    if (!marca || !tipo || !horasDia) {
      setError("Todos os campos são obrigatórios.");
      return;
    }

    if (isNaN(Number(horasDia)) || Number(horasDia) <= 0) {
      setError("A quantidade de horas por dia deve ser um número positivo.");
      return;
    }

    const updatedProduto = {
      marca,
      tipo,
      horasDia: parseFloat(horasDia),
      id: selectedId,
    };

    const updatedEletrodomesticos = eletrodomesticos.map((eletrodomestico) =>
      eletrodomestico.id === selectedId ? updatedProduto : eletrodomestico
    );
    localStorage.setItem("eletrodomesticos", JSON.stringify(updatedEletrodomesticos));
    setEletrodomesticos(updatedEletrodomesticos); // Atualizar a lista local
    setView("checar"); // Voltar para checar após atualizar
    resetForm(); // Limpar o formulário
  };

  const resetForm = () => {
    setMarca("");
    setTipo("");
    setHorasDia("");
    setSelectedId(null);
  };

// Função com useCallback para manter a referência
const loadSelectedProduct = useCallback(
  (id: number) => {
    const selectedProduct = eletrodomesticos.find((prod) => prod.id === id);
    if (selectedProduct) {
      setMarca(selectedProduct.marca);
      setTipo(selectedProduct.tipo);
      setHorasDia(String(selectedProduct.horasDia));
    }
  },
  [eletrodomesticos] // Dependência necessária
);

useEffect(() => {
  if (selectedId !== null) {
    loadSelectedProduct(selectedId);
  }
}, [selectedId, loadSelectedProduct]);


  useEffect(() => {
    if (selectedId !== null) {
      loadSelectedProduct(selectedId);
    }
  }, [selectedId]);

  const generateRelatorio = () => {
    if (eletrodomesticos.length === 0) {
      setRelatorio("Não há eletrodomésticos cadastrados para gerar relatório.");
      return;
    }

    const totalHoras = eletrodomesticos.reduce((acc, prod) => acc + prod.horasDia, 0);
    const mediaHoras = totalHoras / eletrodomesticos.length;

    setRelatorio(`Total de horas: ${totalHoras} horas\nMédia de horas por produto: ${mediaHoras.toFixed(2)} horas`);
  };

  return (
    <div className="flex flex-col md:flex-row text-black max-w-screen-xl mx-auto bg-white">
      <Sidebar setView={setView} />

      <div className="flex-1 p-6 bg-white">
        <div className="flex justify-center items-center h-full">
          {error && <div className="text-red-500 mb-4">{error}</div>}

          {view === "adicionar" && (
            <div className="text-black w-full max-w-md">
              <h1 className="text-xl font-bold mb-4 text-center">Adicionar Eletrodoméstico</h1>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block">Marca:</label>
                  <input
                    type="text"
                    value={marca}
                    onChange={(e) => setMarca(e.target.value)}
                    className="w-full p-2 border border-black rounded text-black"
                    required
                  />
                </div>
                <div>
                  <label className="block">Tipo:</label>
                  <input
                    type="text"
                    value={tipo}
                    onChange={(e) => setTipo(e.target.value)}
                    className="w-full p-2 border border-black rounded text-black"
                    required
                  />
                </div>
                <div>
                  <label className="block">Horas por dia:</label>
                  <input
                    type="number"
                    value={horasDia}
                    onChange={(e) => setHorasDia(e.target.value)}
                    className="w-full p-2 mb-6 border border-black rounded text-black"
                    required
                  />
                </div>
                <button type="submit" className="hover:bg-gray-200 duration-500
                bg-white text-black border border-black px-4 py-2 rounded w-full">
                  Adicionar
                </button>
              </form>
            </div>
          )}

          {view === "atualizar" && (
            <div className="text-black w-full max-w-md">
              <h1 className="text-xl font-bold mb-4 text-center">Atualizar Eletrodoméstico</h1>
              <select
                onChange={(e) => setSelectedId(Number(e.target.value))}
                className="w-full p-2 border border-black bg-white rounded text-black"
              >
                <option value="">Selecione um produto</option>
                {eletrodomesticos.map((eletrodomestico) => (
                  <option key={eletrodomestico.id} value={eletrodomestico.id}>
                    - {eletrodomestico.marca}
                  </option>
                ))}
              </select>
              {selectedId && (
                <div className="space-y-4">
                  <div>
                    <label className="block mt-5">Marca:</label>
                    <input
                      type="text"
                      value={marca}
                      onChange={(e) => setMarca(e.target.value)}
                      className="w-full p-2 border border-black rounded text-black"
                      required
                    />
                  </div>
                  <div>
                    <label className="block">Tipo:</label>
                    <input
                      type="text"
                      value={tipo}
                      onChange={(e) => setTipo(e.target.value)}
                      className="w-full p-2 border border-black rounded text-black"
                      required
                    />
                  </div>
                  <div>
                    <label className="block">Horas por dia:</label>
                    <input
                      type="number"
                      value={horasDia}
                      onChange={(e) => setHorasDia(e.target.value)}
                      className="w-full p-2 mb-6 border border-black rounded text-black"
                      required
                    />
                  </div>
                  <button
                    onClick={handleUpdate}
                    className="hover:bg-yellow-600 duration-300
                    bg-yellow-500 text-white px-4 py-2 rounded w-full"
                  >
                    Atualizar
                  </button>
                </div>
              )}
            </div>
          )}

          {view === "deletar" && (
            <div className="text-black w-full max-w-md">
              <h1 className="text-xl font-bold mb-4 text-center">Deletar Eletrodoméstico</h1>
              <select
                onChange={(e) => setSelectedId(Number(e.target.value))}
                className="w-full p-2 border border-black bg-white rounded text-black"
              >
                <option value="">Selecione um produto para deletar</option>
                {eletrodomesticos.map((eletrodomestico) => (
                  <option key={eletrodomestico.id} value={eletrodomestico.id}>
                    - {eletrodomestico.marca}
                  </option>
                ))}
              </select>
              <button
                onClick={() => handleDelete(selectedId!)}
                className="hover:bg-red-600 duration-300
                bg-red-500 text-white px-4 py-2 rounded w-full mt-4"
              >
                Deletar
              </button>
            </div>
          )}

          {view === "checar" && (
            <div className="text-black">
              <h1 className="text-xl font-bold mb-4 text-center">Eletrodomésticos Cadastrados</h1>
              <button
                onClick={generateRelatorio}
                className="hover:bg-gray-200 duration-500
                bg-white text-black border border-black px-4 py-2 rounded w-full mb-4"
              >
                Gerar Relatório
              </button>
              {relatorio && (
                <div className="bg-gray-100 p-4 rounded mt-4">
                  <h3 className="font-bold">Relatório:</h3>
                  <pre>{relatorio}</pre>
                </div>
              )}
              <table className="w-full mt-4 border-collapse">
                <thead>
                  <tr>
                    <th className="border border-black px-4 py-2">Marca</th>
                    <th className="border border-black px-4 py-2">Tipo</th>
                    <th className="border border-black px-4 py-2">Horas/Dia</th>
                    <th className="border border-black px-4 py-2">Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {eletrodomesticos.map((eletrodomestico) => (
                    <tr key={eletrodomestico.id}>
                      <td className="border border-black px-4 py-2">{eletrodomestico.marca}</td>
                      <td className="border border-black px-4 py-2">{eletrodomestico.tipo}</td>
                      <td className="border border-black px-4 py-2">{eletrodomestico.horasDia}</td>
                      <td className="border border-black px-4 py-2">
                        <button
                          onClick={() => {
                            setView("atualizar");
                            setSelectedId(eletrodomestico.id);
                          }}
                          className="bg-yellow-500 text-white px-4 py-2 rounded mr-2"
                        >
                          Atualizar
                        </button>
                        <button
                          onClick={() => handleDelete(eletrodomestico.id)}
                          className="bg-red-500 text-white px-4 py-2 rounded"
                        >
                          Deletar
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EletrodomesticosPage;
