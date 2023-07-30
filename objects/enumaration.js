var fruit = {
    apple: 2,
    orange: 5,
    pear: 1,
}, 
sentence = "I have ", 
quantity;

for (kind in fruit) {
    quantity = fruit[kind];
    sentence += quantity + " " + kind + (quantity === 1 ? "" : "s") + ", ";
}

sentence = sentence.substring(0, sentence.length - 2) + ".";

console.log(sentence); // I have 2 apples, 5 oranges, 1 pear.