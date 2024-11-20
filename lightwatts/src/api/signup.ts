import { NextApiRequest, NextApiResponse } from "next";
import { connectToOracle } from "@/data/db";

// Função para validar o CEP (opcional, mas importante)
const validarCEP = (cep: string) => {
  return /\d{5}-\d{3}/.test(cep);  // Valida um formato de CEP brasileiro (XXXXX-XXX)
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { nome, email, password, cep, logradouro, bairro, localidade, uf } = req.body;

    if (!nome || !email || !password || !cep || !logradouro || !bairro || !localidade || !uf) {
      return res.status(400).json({ message: "Dados incompletos" });
    }

    if (!validarCEP(cep)) {
      return res.status(400).json({ message: "CEP inválido" });
    }

    try {
      const connection = await connectToOracle();

      // 1. Inserir o endereço na tabela t_enderecos
      const resultEndereco = await connection.execute(
        `INSERT INTO t_enderecos (cep, logradouro, bairro, localidade, uf) 
         VALUES (:cep, :logradouro, :bairro, :localidade, :uf) 
         RETURNING endereco_id INTO :endereco_id`,
        { cep, logradouro, bairro, localidade, uf, endereco_id: { dir: 3004, type: connection.oracle.Types.INTEGER } },
        { autoCommit: true }
      );

      // Tipagem explícita para o resultado de outBinds
      const endereco_id = (resultEndereco.outBinds as { endereco_id: number[] }).endereco_id[0]; // Pega o ID gerado

      // 2. Inserir o cliente na tabela t_clientes, usando o endereco_id
      const resultCliente = await connection.execute(
        `INSERT INTO t_clientes (nome, email, senha, endereco_id, cep) 
         VALUES (:nome, :email, :password, :endereco_id, :cep)
         RETURNING cliente_id INTO :cliente_id`,
        { nome, email, password, endereco_id, cep, cliente_id: { dir: 3004, type: connection.oracle.Types.INTEGER } },
        { autoCommit: true }
      );

      // Tipagem explícita para o resultado de outBinds
      const cliente_id = (resultCliente.outBinds as { cliente_id: number[] }).cliente_id[0]; // Pega o cliente_id gerado

      // 3. Inserir o usuário na tabela t_users, associando ao cliente_id
      await connection.execute(
        `INSERT INTO t_users (usuario_id, email, senha, cliente_id) 
         VALUES (:usuario_id, :email, :password, :cliente_id)`,
        { usuario_id: cliente_id, email, password, cliente_id },
        { autoCommit: true }
      );

      await connection.close();
      res.status(200).json({ success: true, message: "Cadastro realizado com sucesso!" });
    } catch (error) {
      console.error("Erro no banco de dados:", error);
      res.status(500).json({ success: false, message: "Erro no cadastro" });
    }
  } else {
    res.status(405).json({ message: "Método não permitido" });
  }
}
