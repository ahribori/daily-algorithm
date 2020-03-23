const solution = (A, B, K) => {
  return Math.floor(B / K) - Math.floor((A - 1) / K)
};

test('solution', () => {
  expect(solution(6, 11, 2)).toBe(3);
  expect(solution(9, 21, 10)).toBe(2);
});
