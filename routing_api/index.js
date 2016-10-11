var http = require('http');
var fs = require('fs'); 

http.createServer(function(req, res){
	

	if(req.url ==='/'){
		console.log("here")
		fs.createReadStream(__dirname + '/index.htm').pipe(res);
	}else if(req.url === '/api'){
		res.writeHead(200,{'Content-type': 'application/json'});

	var obj = {
		firstname: 'alex',
		middle: 'john'

	}

	res.end(JSON.stringify(obj)); 	
	}else{
		console.log('also')
		res.writeHead(404);
		res.end();	
	}
	
	

}).listen(1337, '127.0.0.1'); 