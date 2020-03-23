const solution = s => {
  const length = s.length;
  const middle = Math.floor(length / 2);
  return length % 2 === 0 ? s[middle - 1] + s[middle] : s[middle];
};

test('solution', () => {
  expect(solution('abcde')).toBe('c');
  expect(solution('qwer')).toBe('we');
});
