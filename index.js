var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res){
	res.render('index', {name: 'Kelly', age: 29});
});

app.get('/about', (req, res) => {
	res.render('about', {faves: ['christmas', 'dog', 'party']});
});

app.get('/blog', (req, res) => {
	res.render('blog');
});

app.listen(8000);