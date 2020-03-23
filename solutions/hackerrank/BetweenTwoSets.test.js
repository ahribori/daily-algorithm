// 최대공약수
function gcd(a, b) {
  if (a % b === 0) return b;
  return gcd(b, a % b);
}

function gcdByArray(arr) {
  let result = arr[0];
  for (let i = 1, length = arr.length; i < length; i++) {
    result = gcd(result, arr[i]);
  }
  return result;
}

// 최소공배수
function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

function lcmByArray(arr) {
  let result = arr[0];
  for (let i = 1, length = arr.length; i < length; i++) {
    result = lcm(result, arr[i]);
  }
  return result;
}

const getTotalX = (a, b) => {
  let count = 0;
  const gcd = lcmByArray(a);
  const lcm = gcdByArray(b);
  for (let i = gcd, n = 2; i <= lcm; i = gcd * n, n++) {
    if (lcm % i === 0) {
      count ++;
    }
  }
  return count;
};

// 최소공배수
test('LCM', () => {
  expect(lcm(12, 24)).toBe(24);
  expect(lcm(5, 12)).toBe(60);
});

// 최대공약수
test('GCD', () => {
  expect(gcd(4, 8)).toBe(4);
  expect(gcd(12, 36)).toBe(12);
  expect(gcd(4, 6)).toBe(2);
});

test('BetweenTwoSets', () => {
  // expect(getTotalX([2, 6], [24, 36])).toBe(2);
  expect(getTotalX([2, 4], [16, 32, 96])).toBe(3);
});
