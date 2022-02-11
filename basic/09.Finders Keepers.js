/*
Finders Keepers
Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'. This means that given an element x, the 'truth test' is passed if func(x) is true. If no element passes the test, return undefined.

URL:https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/finders-keepers
*/

const findElement = (arr, func) => {
    for (let element of arr) if (func(element)) return element;
    return;
};

findElement([1, 2, 3, 4], (num) => num % 2 === 0);
