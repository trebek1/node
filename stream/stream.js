var fs = require('fs');

var readable = fs.createReadStream(__dirname + '/greet.txt', {encoding: 'utf8', highWaterMark: 1024});

var writable = fs.createWriteStream(__dirname + '/greetcopy.txt');



readable.on('data', function(chunk){
	console.log(chunk)
	console.log( '\n', '\n', '\n','end of chunk', '\n', '\n', '\n');
	writable.write(chunk);
});

// stream will fill a buffer with the contents of the file 
// if text > buffer, only get part of the file 
// one byte is 8 bits 'utf8'! 




