var myPrimitive = "first value";
myPrimitive = "another value";
// myPrimitive now points to another string.

var myObject = { key: "first value" };
myObject.key = "another value";
// myObject points to the same object.

console.log(myPrimitive);
console.log(myObject.key);