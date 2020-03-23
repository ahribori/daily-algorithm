const solution = S => {
  const stack = [];
  for (const s of S) {
    switch (s) {
      case '{':
        stack.push(s);
        break;
      case '[':
        stack.push(s);
        break;
      case '(':
        stack.push(s);
        break;
      case '}':
        if (stack.pop() !== '{') {
          return 0;
        }
        break;
      case ']':
        if (stack.pop() !== '[') {
          return 0;
        }
        break;
      case ')':
        if (stack.pop() !== '(') {
          return 0;
        }
        break;
      default:
    }
  }
  if (stack.length === 0) {
    return 1;
  }
  return 0;
};

test('solution', () => {
  expect(solution('{[()()]}')).toBe(1);
  expect(solution('([)()]')).toBe(0);
});
