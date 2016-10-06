//ES6 Classes

'use strict'; 

class Person{
	constructor(firstname, lastname){
		this.firstname = firstname; 
		this.lastname = lastname;
	}

	greet(){
		console.log("hello " + this.firstname + ' ' + this.lastname); 	
	}
}

// function Person(firstname, lastname){
// 	this.firstname = firstname; 
// 	this.lastname = lastname; 
// }

// Person.prototype.greet = function(){
// 	console.log("hello " + this.firstname + ' ' + this.lastname); 
// }

var john = new Person('john', 'doe');
john.greet(); 