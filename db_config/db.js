import mariadb from 'mariadb';

const pool = mariadb.createPool({
	host: 'localhost',
	port: 3306,
	user: 'root',
	password: '1234',
	database: 'users',
	connectionLimit: 5
	});

export default pool;

