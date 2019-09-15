const http = require('http');
const server = http.createServer((req, res) => {
	if (req.url === '/')
		res.write('Hello world from Node Js');
	else 
		res.write('Using some otehr domain');
	res.end();
	
});

server.listen('3000');