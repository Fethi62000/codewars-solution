
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