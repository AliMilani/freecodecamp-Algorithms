/*
Return the length of the longest word in the provided sentence.

Your response should be a number.

URL:https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/find-the-longest-word-in-a-string
*/

const findLongestWordLength = (str) =>
    str.split(" ").sort((a, b) => b.length - a.length)[0].length;

findLongestWordLength("The quick brown fox jumped over the lazy dog"); // 6
