var http = require('http');
var fs = require('fs'); 

http.createServer(function(req, res){
	
	res.writeHead(200,{'Content-type': 'application/json'});

	var obj = {
		firstname: 'alex',
		middle: 'john'

	}

	res.end(JSON.stringify(obj)); 
	//res.end(obj.toString()) --> [object object]
	
	//fs.createReadStream(__dirname + '/index.htm').pipe(res);
	// serialize: translate object into a format that can be stored or transfered 
	// csv, xml, json 

}).listen(1337, '127.0.0.1'); 