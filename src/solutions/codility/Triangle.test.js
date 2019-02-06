const solution = A => {
  const sortedA = A.sort((a, b) => b - a);

  for (let i = 0, len = sortedA.length; i < len; i++) {
    const a = sortedA[i];
    const b = sortedA[i + 1];
    const c = sortedA[i + 2];
    console.log(a, b, c);
    if (a < b + c && b < a + c && c < a + b) {
      return 1;
    }
  }

  return 0;
};

test('solution', () => {
  // expect(solution([10, 2, 5, 1, 8, 20])).toBe(1);
  // expect(solution([10, 50, 5, 1])).toBe(0);
  expect(solution([1, 1, 1, 1, 5, 5, 5])).toBe(1);
});
