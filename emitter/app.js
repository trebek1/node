var Emitter = require('events');
//var Emitter = require('./emitter'); 
var greet = require('./config').events.GREET;

var emtr = new Emitter(); 

emtr.on(greet, function(){
	console.log("Somewhere, someone said hello");
})

emtr.on(greet, function(){
	console.log("Greeting Occured!");
})

console.log("Hello");
emtr.emit(greet);

