
/*
In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
Examples

makeNegative(1);    // return -1
makeNegative(-5);   // return -5
makeNegative(0);    // return 0
makeNegative(0.12); // return -0.12

Notes

    The number can be negative already, in which case no change is required.
    Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.

*/

function makeNegative(num) {
    if (num < 0) {
        return num;
    } else if (num > 0) {
        return -1 * num;
    } else {
        return 0;
    }

}



/*
Description

We need a function that can transform a string into a number. What ways of achieving this do you know?

Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.
*/

const stringToNumber = function (str) {
    return (str * 1);
    return null;
}


/*
Make a simple function called greet that returns the most-famous "hello world!".
Style Points

Sure, this is about as easy as it gets. But how clever can you be to create the most creative "hello world" you can think of? What is a "hello world" solution you would want to show your friends?
*/
// Write a function "greet" that returns "hello world!"
function greet(amazingword) {
    let i = 5;
    do {
        return "hello world!";
        i++;
    } while (i == 5);
}

/*
Implement a function which convert the given boolean value into its string representation.

Note: Only valid inputs will be given.
*/

function booleanToString(b) {
    return b.toString();
}


/*
Introduction

The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.
Task

Given a year, return the century it is in.
*/
function century(year) {
    // Finish this :)
    let cent = year / 100
    if (year % 100 == 0) {
        return cent;
    } else {
        return Math.ceil(cent);
        ;
    }
}

/*
Given an array of integers, return a new array with each value doubled.

For example:

[1, 2, 3] --> [2, 4, 6]
*/

function maps(x) {
    let map1 = x.map((x) => x * 2)
    return map1;

}

function sum(a, b) {
    return a + b;
}
let result = sum(8, 2);
console.log(result);


/*
Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
invert([]) == []

You can assume that all values are integers. Do not mutate the input array/list.
*/

function invert(array) {

    if (array > 0) {
        let arr = array.map((x) => x * 1)
        return arr;
    } else {
        let arr = array.map((x) => x * -1)
        return arr;
    }
}



function findNeedle(haystack) {
    // your code here

    return "found the needle at position " + haystack.indexOf("needle");

}

function areYouPlayingBanjo(name) {
    // Implement me
    console.log(name);

    let arr = name.split("")
    console.log(arr)
    if (arr[0] === ("r")) {
        return `${name} plays banjo`;
    } else if (arr[0] === ("R")) {
        return `${name} plays banjo`;
    } else {
        return `${name} does not play banjo`;
    }
}

function findAverage(array) {
    // your code here
    console.log(array);
    if (array.lenght != 0) {
        return array.reduce((a, b) => a + b) / array.length;
    } else {
        return 0;
    }

}

function smash(words) {
    return words.join(" ");



};

function grow(x) {
    let result = 1
    for (let i = 0; i < x.length; i++) {
        result *= x[i];
    }
    return result;
}

function fakeBin(x) {

    let str = x.split("")
    let map1 = str.map(x => x < 5 ? "0" : "1")

    return map1.join("");

}

function DNAtoRNA(dna) {
    // TODO
    return dna.replace(/T/g, "U");
}

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    // TODO

    if (distanceToPump <= mpg * fuelLeft) {
        return true;
    } else {
        return false;
    }
}

function stringToArray(string) {
    return string.split(' ');
}

function countBy(x, n) {
    let z = [];
    for (let i = 1; i <= n; i++) {
        z.push(x * i);
    }
    return z;

}

function isDivisible(n, x, y) {
    if (n % x == 0 && n % y == 0) {
        return true;
    } else {
        return false;
    }
}

if (name === owner) {
    return "Hello boss";
} else {
    return "Hello guest";
}


