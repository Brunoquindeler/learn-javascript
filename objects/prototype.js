 var adult = { age: 26 }, retrievedProperty = adult.age;
 
 var stringRepresentation = adult.toString();
 // the variable has value of '[object Object]'

 console.log(stringRepresentation); // [object Object]

 adult.toString = function () {
    return "I'm " + this.age;
};

stringRepresentation = adult.toString();
console.log(stringRepresentation); // I'm 26

// ----------------------------------------------------------------------

var child = Object.create(adult);
child.age = 8;

var stringRepresentation = child.toString();
console.log(stringRepresentation); // I'm 8