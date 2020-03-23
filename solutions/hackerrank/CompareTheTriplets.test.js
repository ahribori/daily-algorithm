const solution = (a, b) => {
  const points = [0, 0];

  for (let i = 0; i < 3; i++) {
    if (a[i] > b[i]) {
      points[0]++;
    } else if (a[i] < b[i]) {
      points[1]++;
    }
  }

  return points;
};

test('solution', () => {
  expect(solution([5, 6, 7], [3, 6, 10])).toStrictEqual([1, 1]);
  expect(solution([17, 28, 30], [99, 16, 8])).toStrictEqual([2, 1]);
});
