/*
Repeat a String Repeat a String
Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. For the purpose of this challenge, do not use the built-in .repeat() method.

URL:https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/repeat-a-string-repeat-a-string
*/

function repeatStringNumTimes(str, num) {
    let repeated = "";
    for (let i = 0; i < num; i++) {
        repeated += str;
    }
    console.log(repeated);
    return repeated;
}

repeatStringNumTimes("abc", 3);
