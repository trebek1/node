
var person = {

	firstname: '', 
	lastname: '',
	greet: function(){
		return this.firstname + ' ' + this.lastname; 
	}
}

// turn a regular object into a prototype 
var john = Object.create(person);