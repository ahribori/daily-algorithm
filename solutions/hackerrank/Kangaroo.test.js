const kangaroo = (x1, v1, x2, v2) => {
  if (v2 >= v1) {
    return 'NO';
  }
  while (x2 > x1) {
    x1 = x1 + v1;
    x2 = x2 + v2;
  }
  return x1 === x2 ? 'YES' : 'NO';
};

test('solution', () => {
  expect(kangaroo(0, 3, 4, 2)).toBe('YES');
  expect(kangaroo(0, 2, 5, 3)).toBe('NO');
});
