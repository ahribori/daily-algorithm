const solution = arr => {
  let leftToRightDiagonalSum = 0;
  let rightToLeftDiagonalSum = 0;

  for (let i = 0, rowCount = arr.length; i < rowCount; i++) {
    for (let j = 0; j < rowCount; j++) {
      if (i === j) {
        leftToRightDiagonalSum = leftToRightDiagonalSum + arr[i][j];
      }
      const reversedJ = rowCount - j - 1;
      if (i === reversedJ) {
        rightToLeftDiagonalSum = rightToLeftDiagonalSum + arr[i][j];
      }
    }
  }
  return Math.abs(leftToRightDiagonalSum - rightToLeftDiagonalSum);
};

test('solution', () => {
  expect(solution([[11, 2, 4], [4, 5, 6], [10, 8, -12]])).toBe(15);
});
