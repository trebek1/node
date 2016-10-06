var fs = require('fs'); 

var greet = fs.readFileSync(__dirname + '/greet.txt', 'utf8'); //read data and use utf8 to see what characters it maps to  
console.log(greet);

var greet2 = fs.readFile(__dirname + '/greet.txt', 'utf8', function(err, data){
	// error first callbacks 
	// data sits on a buffer on the heap in v8
	console.log(data)
});

console.log('done');