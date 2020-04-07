function countElements(arr) {
  const set = new Set(arr);
  return arr.reduce((acc, value) => {
    return acc + (set.has(value + 1) ? 1 : 0);
  }, 0);
}

console.log(countElements([1, 2, 3]));
console.log(countElements([1, 2, 3]) === 2);
console.log(countElements([1, 1, 3, 3, 5, 5, 7, 7]) === 0);
console.log(countElements([1, 3, 2, 3, 5, 0]) === 3);
console.log(countElements([1, 1, 2, 2]) === 2);
console.log(countElements([4, 10, 11, 11, 1, 9, 6, 2, 4, 5, 8]) === 7);
