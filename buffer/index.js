var buf = new Buffer('Hello', 'utf8'); // take a string, convert it to binary data and use 'utf8' encoding  

console.log(buf); 
console.log(buf.toString());
console.log(buf.toJSON());
console.log(buf[2]);

buf.write('wo');
console.log(buf.toString());