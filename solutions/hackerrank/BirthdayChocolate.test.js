const birthday = (s, d, m) => {
  const length = s.length;
  let count = 0;
  for (let i = 0; i + m <= length; i++) {
    const window = s.slice(i, i + m);
    const sum = window.reduce((prev, next) => prev + next);
    if (sum === d) {
      count++;
    }
  }
  return count;
};

test('solution', () => {
  expect(birthday([2, 2, 1, 3, 2], 4, 2)).toBe(2);
  expect(birthday([1, 2, 1, 3, 2], 3, 2)).toBe(2);
  expect(birthday([1, 1, 1, 1, 1, 1], 3, 2)).toBe(0);
  expect(birthday([4], 4, 1)).toBe(1);
});
