const solution = S => {
  const stack = [];
  for (const s of S) {
    if (s === '(') {
      stack.push(s);
    } else {
      if (stack.pop() !== '(') {
        return 0;
      }
    }
  }
  return stack.length === 0 ? 1 : 0;
};

test('solution', () => {
  expect(solution('(()(())())')).toBe(1);
  expect(solution('())')).toBe(0);
  expect(solution('()(()()(((()())(()()))')).toBe(0);
});
