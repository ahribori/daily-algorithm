function isValid(s) {
  if (s === '') return true;

  const braceMap = {
    '(': ')',
    '{': '}',
    '[': ']',
  };

  const stack = [];
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (braceMap[char]) {
      stack.push(char);
    } else {
      const open = stack.pop();
      if (!braceMap[open] || char !== braceMap[open]) {
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
