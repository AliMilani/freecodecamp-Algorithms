function destroyer(arr = [], ...args) {
    return arr.filter(element => !args.includes(element));
}

destroyer([2, 3,9, 3], 2, 3)
