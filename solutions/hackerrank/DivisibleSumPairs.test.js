const divisibleSumPairs = (n, k, ar) => {
  let count = 0;
  for (let i = 0; i < n; i++) {
    const num1 = ar[i];
    for (let j = i + 1; j < n; j++) {
      const num2 = ar[j];
      if ((num1 + num2) % k === 0) {
        count++;
      }
    }
  }
  return count;
};

test('solution', () => {
  expect(divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2])).toBe(5);
});
