// AND = && 
// OR = ||

var x = 15;

if (x > 10 && x < 20) {
    console.log("X within range");
}

if (x == 10 || x == 15) {
    console.log("OK");
}

if ((x == 15 || false) && true) {
    console.log("OK");
}