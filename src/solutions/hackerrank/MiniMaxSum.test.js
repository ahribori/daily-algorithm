const miniMaxSum = arr => {
  const sortedArray = arr.sort((a, b) => a - b);
  const sum = sortedArray.reduce((a, b) => a + b);
  const min = sum - sortedArray[sortedArray.length - 1];
  const max = sum - sortedArray[0];
  return `${min} ${max}`;
};

test('solution', () => {
  expect(miniMaxSum([1, 2, 3, 4, 5])).toBe('10 14');
});
