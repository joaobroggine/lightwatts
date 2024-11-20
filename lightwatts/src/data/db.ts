import oracledb from 'oracledb';

export async function connectToOracle() {
  try {
    const connection = await oracledb.getConnection({
      user: 'RM557129',
      password: '100306',
      connectString: 'oracle.fiap.com.br:1521/ORCL'
    });
    console.log('Conexão bem-sucedida!');
    return connection;
  } catch (err) {
    console.error('Erro ao conectar ao Oracle:', err);
    throw err;
  }
}
