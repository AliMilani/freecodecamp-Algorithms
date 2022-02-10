/*
Confirm the Ending
Check if a string (first argument, str) ends with the given target string (second argument, target).

This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

URL:https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/confirm-the-ending
*/

function confirmEnding(str, target) {
    let pattern = `${target}$`;
    let regex = new RegExp(pattern);
    return regex.test(str);
}

// Without regex
function confirmEnding(str, target) {
    let targetLastIndex = str.lastIndexOf(target);
    // Is it at the end?
    if (!(targetLastIndex === str.length - target.length)) return false
    return str.slice(targetLastIndex, target.length + targetLastIndex) === target;
}

confirmEnding("Bastian", "n") // true