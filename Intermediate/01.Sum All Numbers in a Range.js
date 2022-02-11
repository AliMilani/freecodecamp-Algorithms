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
