function solution(s) {
  return (
    (s.length === 4 || s.length === 6) &&
    Array.from(s).filter(_s => !isNaN(_s)).length === s.length
  );
}

test('solution', () => {
  expect(solution('a234')).toBe(false);
  expect(solution('1234')).toBe(true);
});
