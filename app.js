const express = require('express');
const cors = require('cors');
const fs = require('fs');
const https = require('https');

const app = express();
const port = 3000;
const key = fs.readFileSync('express_dc.key');
const cert = fs.readFileSync('express.pem');

const corsOptions = {
	origin: 'https://127.0.0.1',
	optionsSuccessStatus: 200
}

// app.use(cors());
const server = https.createServer({key: key, cert: cert}, app);


app.get('/',cors(corsOptions), (req, res) => {
	msg = { msg: 'Hallo Welt'};
	
	res.send(JSON.parse(JSON.stringify(msg)));
//	res.static('cutelittlepanda.jpg');
});

app.listen(port, () => {
 	console.log(`Server listening ${port}`) 
});

