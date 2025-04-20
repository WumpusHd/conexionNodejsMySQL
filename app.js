const oracledb = require('oracledb');

async function iniciarConexion() {
  try {
    await oracledb.createPool({
      user: 'GRUPO5',
      password: 'TEAM5',
      connectString: 'localhost:51521/FREEPDB1'
    });

    console.log('✅ ¡Conexión exitosa a Oracle!');
    
    // Puedes probar con una consulta aquí
    const connection = await oracledb.getConnection();
    const result = await connection.execute('SELECT * FROM nombre_de_tu_tabla');
    console.log(result.rows);

    await connection.close();
  } catch (err) {
    console.error('❌ Error conectando a Oracle:', err);
  }
}

iniciarConexion();
