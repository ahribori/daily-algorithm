const solution = (X, A) => {
  if (A.length < X) {
    return -1;
  }
  const set = new Set();
  for (let i = 0, len = A.length; i < len; i++) {
    const num = A[i];
    if (!set.has(num)) {
      set.add(num);
      if (set.size === X) {
        return i;
      }
    }
  }
  return -1;
};

test('solution', () => {
  expect(solution(5, [1, 3, 1, 4, 2, 3, 5, 4])).toBe(6);
  expect(solution(5, [3])).toBe(-1);
});
