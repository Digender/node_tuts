const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
	const readStream = fs.createReadStream('../static/index.html');
	const readStream404 = fs.createReadStream('../static/404.html');
	if (req.url === '/') {
		res.writeHead(200, {'Content-Type': 'text/html'});
		// text/json for json and so on for other types

		readStream.pipe(res);
	} else {
		res.writeHead(404, {'Content-Type': 'text/html'});
		readStream404.pipe(res);
	}
}).listen('3000');