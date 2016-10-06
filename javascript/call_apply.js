var obj = {
	name: 'alex trzecaiak',
	greet: function(){
		console.log(`Hello ${this.name}`);
	}
}

obj.greet();
obj.greet.call({name: 'Bryan'}) // param1, param2 
obj.greet.apply({name: 'Bryan'}) // [param1, param2] array of params 