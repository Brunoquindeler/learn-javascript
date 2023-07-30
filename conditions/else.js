var umbrellaMandatory;
var country = "Brazil";

if (country === "England") {
    umbrellaMandatory = true;
} else {
    umbrellaMandatory = false;
}

console.log(umbrellaMandatory); // false

country = "England";
if (country === "England") {
    umbrellaMandatory = true;
} else if (country === "Brazil") {
    umbrellaMandatory = false
}

console.log(umbrellaMandatory); // true