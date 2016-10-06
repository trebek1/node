'use strict'

var EventEmitter = require('events'); 
var util = require('util');

// extends eventEmitter is the same as EventEmitter.call(this) with super() .... Boom! 

class Greetr extends EventEmitter {
	
	constructor(){
		super()
		this.greeting = 'hello world';
	}
	greet(data){
		console.log(this.greeting + ': ' + data);
		this.emit('greet',data);
	}
}

// function Greetr(){
// 	EventEmitter.call(this); // -> elim with super 
// 	this.greeting = 'hello world!';
// }

//util.inherits(Greetr,EventEmitter); -> elim with extends

// Greetr.prototype.greet = function(data){
// 	console.log(this.greeting + ': ' + data);
// 	this.emit('greet',data);
// }

var greeter1 = new Greetr(); 
greeter1.on('greet', function(data){
	console.log("someone greeted ", data);
});

greeter1.greet("Tony"); 

