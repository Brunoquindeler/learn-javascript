var myCounter = {
    number: 0,
    plusPlus: function() {
        this.number = this.number + 1;
    },
    isGraterThanTen: function() {
        return this.number > 10;
    },
};

// now can call (number, plusPlus...) safely of the global scope...

for (var i = 1; i <= 11; i++) {
    myCounter.plusPlus()
    console.log(myCounter.number+": "+myCounter.isGraterThanTen());
}

/*
1: false
2: false
3: false
4: false
5: false
6: false
7: false
8: false
9: false
10: false
11: true
*/