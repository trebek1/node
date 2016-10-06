var util = require('util'); 

function Person(){
	this.firstname = 'john'; 
	this.lastname = 'doe'; 
}

Person.prototype.greet = function(){
	console.log("hello " + this.firstname + ' ' + this.lastname); 
}

function Policeman(){
	Person.call(this); 
	this.badgenumber = '1234';
}

util.inherits(Policeman, Person); // policeman gets prototypes from person (greet method)
var officer = new Policeman()
console.log(officer.__proto__.__proto__); // shows the prototype of the prototype is the greet method 
officer.greet(); // enabled by line 17, names defined by line 13 