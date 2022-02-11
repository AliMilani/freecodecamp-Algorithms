/*
Chunky Monkey
Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

URL:https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/chunky-monkey
*/

function chunkArrayInGroups(arr, size) {
  let grouped = [];
  for (let i = 0; i < arr.length; i++) {
    if (i % size === 0) grouped.push([]);
    grouped[grouped.length - 1].push(arr[i]);
  }
  return grouped;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2); // [ [ 'a', 'b' ], [ 'c', 'd' ] ]
