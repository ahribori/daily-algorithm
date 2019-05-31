const birthdayCakeCandles = ar => {
  const max = Math.max(...ar);
  return ar.filter(item => item === max).length;
};

test('solution', () => {
  expect(birthdayCakeCandles([3, 2, 1, 3])).toBe(2);
});
