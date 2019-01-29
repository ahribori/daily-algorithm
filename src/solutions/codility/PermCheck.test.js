const solution = A => {
  let isPermutation = true;
  const sortedA =  A.sort((a, b) => a - b);
  if (sortedA[0] !== 1) {
    return 0;
  }
  const sum = sortedA.reduce((prev, current, n) => {
    if (prev !== (n * (n + 1)) / 2) {
      isPermutation = false;
    }
    return prev + current;
  });
  const n = A.length;
  if (sum !== (n * (n + 1)) / 2) {
    isPermutation = false;
  }
  return isPermutation ? 1 : 0;
};

test('tc1', () => {
  expect(solution([4, 1, 3, 2])).toBe(1);
  expect(solution([4, 1, 3])).toBe(0);
  expect(solution([1, 4, 1])).toBe(0);
  expect(solution([2])).toBe(0);
  expect(solution([3, 1])).toBe(0);
});
