var fs = require('fs');
var zlib = require('zlib'); //file compression to gzip 

var readable = fs.createReadStream(__dirname + '/greet.txt');

var writable = fs.createWriteStream(__dirname + '/greetcopy.txt');

var compressed = fs.createWriteStream(__dirname + '/greet.txt.gz'); 

var gzip = zlib.createGzip(); 

readable.pipe(writable)

readable.pipe(gzip).pipe(compressed);

// pipe is on the prototype of the redable so it has access to it 
// if parent object is returned -> cascading 
// chaining if returns changes along the way 




