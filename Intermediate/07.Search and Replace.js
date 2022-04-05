function myReplace(str, before, after) {
    let result = str.match(new RegExp(before, "i"));
    result[0][0] === result[0][0].toUpperCase()
        ? (after = after[0].toUpperCase() + after.slice(1))
        : (after = after.toLowerCase());

    return str.replace(result[0], after);
}

console.log(myReplace("Let us go to the store", "store", "mall"));
