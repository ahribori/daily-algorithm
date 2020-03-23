const solution = A => {
  const calculateAvg = arr => arr.reduce((prev, current) => prev + current) / arr.length;
  let minAvg = Math.max(...A);
  let index = 0;

  const length = A.length;
  for (let i = 0; i < length; i++) {
    for (let k = i + 1; k < length; k++) {
      const avg =  calculateAvg(A.slice(i, k + 1));
      if (minAvg > avg) {
        minAvg = avg;
        index = i;
      }
    }
  }
  return index;
};

test('solution', () => {
  expect(solution([4, 2, 2, 5, 1, 5, 8])).toBe(1);
});
