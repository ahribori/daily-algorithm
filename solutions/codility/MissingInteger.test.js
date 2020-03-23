/**
 * Matcher References
 *
 * https://jestjs.io/docs/en/using-matchers
 */
const solution = N => {
  const arr = N.filter(n => n > 0).sort((a, b) => a - b);

  for (let i = 0, len = arr.length; i < len; i++) {
    const current = arr[i];
    const next = arr[i + 1];
    if (i === 0 && current > 1) {
      return 1;
    }
    if (next - current > 1 || !next) {
      return current + 1;
    }
  }
  return 1;
};

test('solution', () => {
  expect(solution([1, 3, 6, 4, 1, 2])).toBe(5);
  expect(solution([1, 2, 3])).toBe(4);
  expect(solution([-1, -3])).toBe(1);
  expect(solution([2])).toBe(1);
});
