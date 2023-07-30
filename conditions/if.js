var country = "Brazil";
var weather;
var food;
var currency;

if (country === "England") {
    weather = "horrible";
    food = "filling";
    currency = "pound sterling";
}

if (country === "Brazil") {
    weather = "nice";
    food = "very good";
    currency = "brazilian real";
}

if (country === "Germany") {
    weather = "average";
    food = "wurst thing ever";
    currency = "funny, small and colourful";
}

var message = 
    "this is " +
    country +
    ", the weather is " +
    weather +
    ", the food is " +
    food +
    " and the " +
    "currency is " +
    currency + ".";

console.log(message); // this is Brazil, the weather is nice, the food is very good and the currency is brazilian real.