var foo = 42;
var bar = 42;
var baz = "42";
var qux = "life";

console.log(foo == bar); // true
console.log(baz == qux); // false
console.log(foo == baz); // true
console.log(foo === bar); // true
console.log(foo === baz); // false