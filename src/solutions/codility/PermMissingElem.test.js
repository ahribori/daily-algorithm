/**
 * Matcher References
 *
 * https://jestjs.io/docs/en/using-matchers
 */
const solution = A => {
  const arr = A.sort((a, b) => a - b);
  if (!arr[0] || arr[0] !== 1) {
    return 1;
  }
  for (let i = 0, len = arr.length; i < len; i++) {
    const current = arr[i];
    const next = arr[i + 1];
    if (!next || next - current > 1) {
      return current + 1;
    }
  }
  return 1;
};

test('solution', () => {
  expect(solution([])).toBe(1);
  expect(solution([2])).toBe(1);
  expect(solution([2, 3, 1, 5])).toBe(4);
  expect(solution([2, 3, 1, 4])).toBe(5);
});
