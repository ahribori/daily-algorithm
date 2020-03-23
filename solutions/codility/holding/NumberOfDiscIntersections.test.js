const solution = A => {
  const circles = {};
  for (let i = 0, len = A.length; i < len; i++) {
    const center = i;
    const r = A[i];
    const left = i - A[i];
    const right = i + A[i];
    circles[center] = {
      left,
      right,
      r,
    };
  }
  console.log(circles);
  return A;
};

test('solution', () => {
  expect(solution([1, 5, 2, 1, 4, 0])).toBe(11);
});
