function solution(a, b) {
  const [small, big] = [a, b].sort((a, b) => a - b);
  return ((small + big) * (big - small + 1)) / 2;
}

test('solution', () => {
  expect(solution(3, 5)).toBe(12);
  expect(solution(3, 3)).toBe(3);
  expect(solution(5, 3)).toBe(12);
});
