import oracledb from 'oracledb';

// Função para conectar ao Oracle com tratamento de erro aprimorado
export async function connectToOracle() {
  try {
    // Lendo as credenciais a partir das variáveis de ambiente (ideal para segurança)
    const user = process.env.ORACLE_USER;
    const password = process.env.ORACLE_PASSWORD;
    const connectString = process.env.ORACLE_CONNECT_STRING;

    if (!user || !password || !connectString) {
      throw new Error('Credenciais do Oracle não configuradas corretamente!');
    }

    const connection = await oracledb.getConnection({
      user,
      password,
      connectString
    });

    console.log('Conexão bem-sucedida!');
    return connection;
  } catch (err) {
    console.error('Erro ao conectar ao Oracle:', err);
    throw err; // Relançando o erro para ser tratado em outro ponto se necessário
  }
}
