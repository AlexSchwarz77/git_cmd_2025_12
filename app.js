import  express from 'express';
import cors from 'cors';
import fs from 'fs';
//const https = require('https');
import mariadb from 'mariadb';
import  pool  from  './db_config/db.js';
import router from './routes/route.js';

const app = express();
const port = 3000;
//const key = fs.readFileSync('/etc/sitecert/apache.key');
//const cert = fs.readFileSync('/etc/sitecert/apache.pem');

pool.getConnection()
	.then(conn => {
		conn.query('SELECT * FROM users');
		console.log("working");
	})
	.catch(err => console.log(err));

const corsOptions = {
	origin: 'https://127.0.0.1',
	optionsSuccessStatus: 200
}

app.use(cors());
//const server = https.createServer({key: key, cert: cert}, app);


app.use('/api',router);

app.listen(port, () => {
 	console.log(`Server listening ${port}`) 
});

