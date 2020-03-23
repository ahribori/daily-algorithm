// 최대공약수
function gcd(a, b) {
  if (a % b === 0) return b;
  return gcd(b, a % b);
}

test('GCD', () => {
  expect(gcd(4, 8)).toBe(4);
  expect(gcd(12, 36)).toBe(12);
  expect(gcd(4, 6)).toBe(2);
});
