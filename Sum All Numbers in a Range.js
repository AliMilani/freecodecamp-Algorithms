// function sumAll(arr) {
//   let a = arr[0]; 
//   let b = arr[1]; 
//   if (a > b) {
//     let c = a;
//     a = b;
//     b = c;
//   }
//   let sum = 0;
//   for (a; a <= b; a++) {
//     sum += a;
//   }
//   return sum;
// }

function sumAll(arr) {
  let start = Math.min(...arr);
  let end = Math.max(...arr);
  let sum = 0;
  for (start; start <= end; start++) {
    sum += start;
  }
  return sum;
}

sumAll([10, 5]);
