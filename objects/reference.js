// Objects are passed by reference

var myPizza = { slices: 5 };
console.log(myPizza.slices); // 5

var yourPizza = myPizza;
console.log(yourPizza.slices); // 5

myPizza.slices = myPizza.slices - 1;
console.log(myPizza.slices); // 4
console.log(yourPizza.slices); // 4

var a = {}, b = {}, c = {}; // 3 different empty objects

var a, b, c = {}; // refer to the same empty object