function isValid(s) {
  if (s === '') return true;
  const map = {
    '(': ')',
    '{': '}',
    '[': ']',
  };
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (map[char]) {
      stack.push(char);
    } else {
      const open = stack.pop();
      if (!map[open] || char !== map[open]) {
        return false;
      }
    }
  }
  return stack.length === 0;
}

isValid('()');
isValid('()[]{}');
isValid('(]');
isValid('([)]');
isValid('{[]}');
isValid('(])');
isValid('[{}()][]');
isValid('');
