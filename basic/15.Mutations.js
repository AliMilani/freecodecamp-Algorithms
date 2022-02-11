/*
Mutations
Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string hello does not contain a y.

Lastly, ["Alien", "line"], should return true because all of the letters in line are present in Alien.

URL:https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/mutations
*/

// function mutation([first, second]) {
//   return (
//     [...second.toLowerCase()].filter((char) => {
//       if (!first.toLowerCase().includes(char)) return true;
//     }).length === 0
//   );
// }

function mutation([first, second]) {
    return [...second.toLowerCase()].every((char) =>
        first.toLowerCase().includes(char) ? true : false
    );
}

mutation(["hello", "hey"]) // false
