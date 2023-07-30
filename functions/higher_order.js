// Define two simple functions
var add_2 = function(x) {
    return x + 2;
}

var double = function(x) {
    return x * 2;
}

// map is cool function that accepts 2 arguments:
// func     the function to call
// list     a array of values to call func on
var map = function(func, list) {
    var output = []; // output list
    for (idx in list) {
        output.push(func(list[idx]));
    }
    return output;
}

// we use map to apply a function to an entire list
// of inputs to "map" them to a list of corresponding outputs
var res1 = map(add_2, [5, 6, 7]); // => [7, 8, 9]
var res2 = map(double, [5, 6, 7]); // => [10, 12, 14]

console.log(res1);
console.log(res2);

//---------------------------------------------------------------------------------------//
process_add_2 = function(list) {
    return map(add_2, list);
}

process_double = function(list) {
    return map(double, list);
}

var p1 = process_add_2([5, 6, 7]);
var p2 = process_double([5, 6, 7]);

console.log(p1);
console.log(p2);

//---------------------------------------------------------------------------------------//
// a function that generate a list processor that performs
var buildProcessor = function(func) {
    var process_func = function(list) {
        return map(func, list);
    }
    return process_func;
}
// calling buildProcessor returns a function which is called with a list input

// using buildProcessor we could generate the add_w and double list processors as follows
process_add_2 = buildProcessor(add_2);
process_double = buildProcessor(double);

p3 = process_add_2([5, 6, 7]);
p4 = process_double([5, 6, 7]);

console.log(p3);
console.log(p4);

//---------------------------------------------------------------------------------------//

var buildMultiplier = function(x) {
    return function(y) {
        return x * y;
    };
};

var double = buildMultiplier(2);
var triple = buildMultiplier(3);

double(3); // => 6
triple(3); // => 9