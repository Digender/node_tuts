const express = require('express');
const app = express();
const path = require('path');

app.get('/', (req, res) => { //home page or index route
	res.send('Hello World Express');
});

app.get('/example', (req, res) => { //home page or index route
	res.send('Hitting example route');
});

app.get('/example/:name/:age', (req, res) => {
	console.log(req.params);
	console.log(req.query);
	res.send('name: ' + req.params.name + ' age: ' + req.params.age);
});

app.use('', express.static(path.join(__dirname, '/static')))
app.get('/index', (req, res) => { //home page or index route
	res.sendFile(path.join(__dirname, 'static', 'index.html'));
});

app.listen(3000);