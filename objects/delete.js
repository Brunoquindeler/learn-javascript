var adult = { age: 26 }, child = Object.create(adult);
child.age = 8;

var prototypeAge = child.age;
console.log(prototypeAge); // 8

delete child.age;

prototypeAge = child.age;
console.log(prototypeAge); // 26