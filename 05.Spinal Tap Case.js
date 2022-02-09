function spinalCase(str) {
    // "It's such a fine line between stupid, and clever."
    // --David St. Hubbins

    return str
        .split(/\s|_|(?=[A-Z])/)
        .join('-')
        .toLowerCase()

}

let result = spinalCase("this IsSpinalTap");

console.log(result);
