const breakingRecords = scores => {
  let highestCount = -1;
  let lowestCount = -1;
  let highestScore = -1;
  let lowestScore = 10 ** 8 + 1;
  scores.forEach(score => {
    if (score > highestScore) {
      highestCount++;
      highestScore = score;
    }
    if (score < lowestScore) {
      lowestCount++;
      lowestScore = score;
    }
  });
  return [highestCount, lowestCount];
};

test('breakingRecords', () => {
  expect(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1])).toStrictEqual([
    2,
    4,
  ]);
  expect(breakingRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42])).toStrictEqual([
    4,
    0,
  ]);
  expect(breakingRecords([0, 9, 3, 10, 2, 20])).toStrictEqual([3, 0]);
});
