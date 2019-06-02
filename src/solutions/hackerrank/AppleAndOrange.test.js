const countApplesAndOranges = (s, t, a, b, apples, oranges) => {
  const appleInRange = apples.map(x => a + x).filter(x => x >= s && x <= t);
  const orangeInRange = oranges.map(x => b + x).filter(x => x >= s && x <= t);
  return [appleInRange.length, orangeInRange.length];
};

test('solution', () => {
  expect(countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6])).toStrictEqual([1, 1]);
});
