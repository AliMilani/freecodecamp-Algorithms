/*
Truncate a String
Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

URL:https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/truncate-a-string
*/

function truncateString(str, num) {
    if (str.length <= num) return str;
    return str.slice(0, num) + "...";
}

truncateString("A-tisket a-tasket A green and yellow basket", 8); // A-tisket...
