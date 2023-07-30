var language = {
    name: "JavaScript",
    isSupportedByBrowsers: true,
    createdIn: 1995,
    author: {
        firstname: "Brendan",
        lastName: "Eich",
    },
    // Yes, objects can be nested!
    getAuthorFullName: function() {
        return this.author.firstname + " " + this.author.lastName;
    },
    // Yes, functions can be values too!
};

var name1 = language.name; // JavaScript
var name2 = language["name"]; // JavaScript

// undef is undefined because we have not assigned this property yet.
var undef = language.undefProperty; // undefined

console.log(name1);
console.log(name2);
console.log(undef);

language.undefProperty = "now I exist";

undef = language.undefProperty; // now I exist
console.log(undef);

language["undefProperty"] = "Nice";

undef = language.undefProperty; // Nice
console.log(undef);