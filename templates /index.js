var http = require('http');
var fs = require('fs'); 

http.createServer(function(req, res){
	// event listener fired when something happens 
	//self.emit('requrest', req, res); 

	res.writeHead(200,{
		'Content-type': 'text/html'
	})
	//sync call 
	var html = fs.readFileSync(__dirname + '/index.htm', 'utf8');
	// utf8 param tells to convert to string 
	// now use use message to replace part of string {message}, with message
	var message = 'hello world....';
	html = html.replace('{message}', message);
	res.end(html); 



}).listen(1337, '127.0.0.1'); 
// localhost 1337 
// node v8 changes code to machine code, so when change happens, server needs to stop
// then load new code and then run 
// can change HTML code and refresh because it is not converted to machine code, just a reference 
// any javascript changes must have a server restart 

//{ Template }, code that is designed to be a placeholder for other values once calculated 



