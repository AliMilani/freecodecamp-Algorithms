// function diffArray(arr1, arr2) {
//   let diffs = [];

//   while (arr1.length) {
//     let element = arr1.shift();
//     if (arr2.lastIndexOf(element) === -1) diffs.push(element);
//     else arr2.splice(arr2.lastIndexOf(element), 1);
//   }
//   diffs = diffs.concat(arr1);
//   diffs = diffs.concat(arr2);

//   return diffs;
// }

function diffArray(arr1, arr2) {
  return arr1
    .concat(arr2)
    .filter(item => !arr1.includes(item) || !arr2.includes(item));
}

diffArray([1, 2, 3, 5, 5, 5], [1, 2, 3, 4, 5]);
