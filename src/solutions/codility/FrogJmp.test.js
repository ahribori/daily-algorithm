/**
 * Matcher References
 *
 * https://jestjs.io/docs/en/using-matchers
 */
const solution = (X, Y, D) => {
  return Math.ceil((Y - X) / D)
};

test('solution', () => {
  expect(solution(10, 85, 30)).toBe(3);
  expect(solution(300, 400, 10)).toBe(10);
});
