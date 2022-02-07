// function destroyer(arr = [], ...args) {
//   args.forEach((element) => {
//     arr.reduce((a, b, i) => {
//         (b === element) ? arr.splice(i, 1) : null
//         console.log(b,element,i)
//     }, 0);
//   });
//   return arr;
// }

function destroyer(arr = [], ...args) {
    return arr.filter(element => !args.includes(element));
}

console.log(destroyer([2, 3,9, 3], 2, 3));
