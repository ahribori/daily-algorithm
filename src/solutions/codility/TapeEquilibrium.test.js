/**
 * Matcher References
 *
 * https://jestjs.io/docs/en/using-matchers
 */
const solution = A => {
  let absList = [];
  const sum = A.reduce((prev, current) => prev + current);
  A.reduce((prev, current) => {
    const abs = Math.abs(2 * prev - sum);
    absList.push(abs);
    return prev + current;
  });
  return Math.min(...absList);
};

test('solution', () => {
  expect(solution([3, 1, 2, 4, 3])).toBe(1);
});
