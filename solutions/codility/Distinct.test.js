const solution = A => {
  return new Set(A).size;
};

test('solution', () => {
  expect(solution([2,1,1,2,3,1])).toBe(3);
});
