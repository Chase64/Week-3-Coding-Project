//Question 1.a.
var ages = [3, 9, 23, 64, 2, 8, 28, 93];
console.log(ages[ages.length - 1] - ages[0]);

//Question 1.b.
ages.push(43);
console.log(ages[ages.length - 1] - ages[0]);

//Question 1.c.
var avgAge = ages.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0) / ages.length;
console.log(avgAge);


//Question 2.a.
var names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

for (let i = 0; i < names.length - 1; i++) {
    var namesLetters = (i / names[i].length);
} console.log(namesLetters);

//Question 2.b.
for (i = 0; i < names.length - 1; i++) {
} console.log(names.concat(i));

//Question 3
console.log(ages[ages.length - 1]);
 
//Question 4
console.log(ages[0]);

//Question 5
var nameLengths = [];

for (i = 0; i < names.length; i++) {
    nameLengths.push(names[i].length)
} console.log(nameLengths);

//Question 6
var namesSum = nameLengths.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
}, 0);
console.log(namesSum);

//Question 7
function concatWord(word, n) {
    for (i = 0; i < n; i++) {
        console.log(word);
    }
}
concatWord('Hello', 3);

//Question 8 
function fullName(firstName, lastName) {
    return firstName + ' ' + lastName
}
console.log(fullName('Jerry', 'Garcia'));

//Question 9
var anArray = [2, 3, 4, 5, 6, 100, 8,]

function numbersSum(arrayNumbers) {
    var numbersSum = arrayNumbers.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    }, 0);

    if (numbersSum > 100) {
        console.log(true)
    }
}
numbersSum(anArray)

//Question 10
var array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function avgElements(anyArray) {
    var avg = anyArray.reduce((accumulator, currentValue) => {
        return accumulator + currentValue
    }, 0) / anyArray.length;
    return avg
}
console.log(avgElements(array1))

//Question 11
var array2 = [1, 2, 3, 4, 500,]
var array3 = [1, 2, 3, 4,]

function compareArrays(anyArray1, anyArray2) {
    var avg1 = anyArray1.reduce((accumulator, currentValue) => {
        return accumulator + currentValue
    }, 0) / anyArray1.length;

    var avg2 = anyArray2.reduce((accumulator, currentValue) => {
        return accumulator + currentValue
    }, 0) / anyArray2.length;

    if (avg1 > avg2) {
        console.log(true)
    }
}
compareArrays(array2, array3)

//Question 12
var tempIsHot = true
var moneyInWallet = 12.75

function willBuyDrink(isHotOutside, moneyInPocket) {
    if ((isHotOutside === true) && (moneyInPocket > 10.50)) {
        console.log(true)
    }
}
willBuyDrink(tempIsHot, moneyInWallet)

//Question 13. This function will water plants in a
//greenhouse if the inside temperature is warm enough and
//the fans are turned off, otherwise it will not water
//the plants.I created this function because when I'm
//sufficient enough in programming, I plan on programming
//an automated control system for my mothers greenhouse.
var insideTemp = 84.3
var insideAirFlow = false
var waterLevel = 5

function waterPlants(temp, air, water) {
    if ((temp > 70) && (air === false) && (water < 5)) {
        console.log('Watering plants now')
    } else {
        console.log('Conditions are not right')
    }
}

waterPlants(insideTemp, insideAirFlow, waterLevel);

//Chase Furniss