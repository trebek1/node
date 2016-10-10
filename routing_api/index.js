var http = require('http');
var fs = require('fs'); 

http.createServer(function(req, res){
	

	if(req.url ==='/'){
		fs.createReadStream(__dirname + '/index.htm').pipe(res);
	}
	if(req.url === '/api'){
		res.writeHead(200,{'Content-type': 'application/json'});

	var obj = {
		firstname: 'alex',
		middle: 'john'

	}

	res.end(JSON.stringify(obj)); 	
	}
	

}).listen(1337, '127.0.0.1'); 