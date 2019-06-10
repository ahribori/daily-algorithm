// 최대공약수
function gcd(a, b) {
  if (a % b === 0) return b;
  return gcd(b, a % b);
}

// 최소공배수
function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

test('LCM', () => {
  expect(lcm(60, 48)).toBe(240);
  expect(lcm(5, 12)).toBe(60);
});
