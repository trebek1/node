var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var port = process.env.PORT || 3000; 

var urlencodedParser = bodyParser.urlencoded({extended: false});
var jsonParser = bodyParser.json(); 

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.get('/', function(req,res){
	res.render('index')
});

app.get('/person/:id', function(req,res){
	res.render('person', {id: req.params.id, Qstr: req.query.qstr})
});


app.post('/person', urlencodedParser, function(req,res){
	res.send('thanks');
	console.log(req.body.firstname);
	console.log(req.body.lastname);
	
});

app.post('/personjson', jsonParser, function(req, res){
	res.send('thanks for the json even though its not that great');
	console.log(req.body.firstname);
	console.log(req.body.lastname);
})


// app.get('/person/:id', function(req,res){
// 	res.send('<html><head></head><body><h1> Person ' + req.params.id + '</h1></body></html>');
// });

app.get('/api', function(req,res){
	res.json({first: 'alex', last: 'john'});
})

app.listen(port);

