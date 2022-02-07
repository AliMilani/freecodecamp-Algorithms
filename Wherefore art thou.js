function whatIsInAName(collection, source) {
  const arr = [];
  // Only change code below this line
  arr.push(
    ...collection.filter((collectionItem) => {
      for (let key in source) {
        if (collectionItem[key] !== source[key]) {
          return false;
        }
      }
      return true;
    })
  );

  // Only change code above this line
  return arr;
}

whatIsInAName(
  [
    { first: "Romeo", last: "Montague" },
    { first: "Mercutio", last: null },
    { first: "Tybalt", last: "Capulet" },
  ],
  { last: "Capulet" }
);
