
// NOTES 

// when you call module.exports, the file is wrapped in a function with exports, require, module, __filename and __dirname
// using editor visual studio code you can dive into the v8 engine and the javascript core 

// if you require a file it looks for js file automatically or what you explicitly defined it as 
// this code is in the node require javascript core 

// if none exist, looks for directory with same name 
//  -> then looks for index file in that directory 

// requiring a json file -> javascript can interpret it and use the variables in it

// module.exports is an {} that can be added to 

// can set it to a new object with the 'new' keyword. The new keyword just creates a new object. 

// objects are passed by reference 

// once a module.exports is required, it is cached and calling again will call same one again. 

// HERE ARE SOME DESIGN PATTERNS


var greet = require('./greet1');
greet();

var greet2 = require('./greet2').greet;
greet2();

var greet3 = require('./greet3');
greet3.greet();
greet3.greeting = 'Changed hello world!';

var greet3b = require('./greet3');
greet3b.greet();

var Greet4 = require('./greet4');
var grtr = new Greet4();
grtr.greet();

var greet5 = require('./greet5').greet;
greet5();

// exports and module.exports are similar but not all design patterns will work for exports 
// setting exports equal to a value makes exports point to its own copy of module.exports so 
// both will not have the same value, now require will be empty but exports will have value 
// mutations will still work so adding properties by using module.greet etc 

// exports = function ..... will break 
exports.greet = function //..... will work 

var util = require('util') // this is a native module, if this is native, goes and gets that module 

//ES6 

//import * as greetr from 'greet'; returns all exports from greet library with greetr 














