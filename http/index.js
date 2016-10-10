//TCP/IP 

// protocol -> rules two sides agree on while communicating 

// client --> server model.  Client makes a request, server sends a response in a standard way 
// IP --> identify browser, open a socket and connect to web server address 
// send info over HTTP, FTP, SMTP etc.. P --> protocol 

// how is info sent? Transmision Control Protocol (TCP) TAke info and split it into pieces through socket //and those pieces are called packets 

//Node provides ability to send over TCP/IP 
//Same concept as a stream 
//Open and close sockets when requesting info 
//Keeping socket open all the time is what we refer to as a 'socket'

// Addresses and ports 

//port: once the socket is connected and computer recieves a packet, how knows what program to send it to 
//HTTP: set of rules for data being transfered on the web 

// headers are key value pairs 
// host: www.google.com
// response : MIME Type: multipurpose internet mail extensions (text/html, application/json, image/jpeg)

// http_parser -> http in nodejs core -> 

var http = require('http');

http.createServer(function(req, res){
	// event listener fired when something happens 
	//self.emit('requrest', req, res); 

	res.writeHead(200,{
		'Content-type': 'text/plain'
	})
	res.end('Hello World\n'); 



}).listen(1337, '127.0.0.1'); 
// localhost 1337 

