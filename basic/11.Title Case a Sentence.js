/*
Title Case a Sentence
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like the and of.

URL:https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/title-case-a-sentence
*/

function titleCase(str) {
    return str
        .toLowerCase()
        .split(" ")
        .map(word => {
            word = word.split("");
            word[0] = word[0].toUpperCase();
            return word.join("");
        })
        .join(" ");
}

titleCase("I'm a little tea pot");

