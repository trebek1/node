var buffer = new ArrayBuffer(8) // byte -> 8 bits 8bytes -> 64 bits of data, coming from v8 javascript engine 
var view = new Int32Array(buffer); // view lets me use base 10 numbers to store in buffer 

view[0] = 5; //32 bits for a 5 
view[1] = 15; //32 bits for a 15 
view[2] = 1 // 32 bits for a 1. since the buffer is of size 64, only two numbers can be stored 
console.log(view)