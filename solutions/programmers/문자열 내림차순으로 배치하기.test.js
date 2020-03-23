function solution(s) {
  return Array.from(s)
    .sort((a, b) => {
      return b > a ? 1 : -1;
    })
    .join('');
}
test('solution', () => {
  expect(solution('Zbcdefg')).toBe('gfedcbZ');
});
