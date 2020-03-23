/**
 * Matcher References
 *
 * https://jestjs.io/docs/en/using-matchers
 */
const solution = (A, K) => {
  let arr = A || [];
  const size = arr.length;
  if (size === 0) {
    return arr;
  }
  for (let i = 0; i < K; i++) {
    const lastElement = arr[size - 1];
    const withoutLastElement = arr.slice(0, size - 1);
    arr = [lastElement, ...withoutLastElement];
  }
  return arr;
};

test('tc1', () => {
  const A = [3, 8, 9, 7, 6];
  const K = 3;
  expect(solution(A, K)).toEqual([9, 7, 6, 3, 8]);
});

test('tc2', () => {
  const A = [];
  const K = 3;
  expect(solution(A, K)).toEqual([]);
});
