const countingValleys = (n, s) => {
  let count = 0;
  let altitude = 0;
  let underVally = false;

  for (let i = 0; i < n; i++) {
    const direction = s[i];
    if (direction === 'U') {
      altitude++;
    } else {
      altitude--;
    }

    console.log(altitude)
    if (altitude === -1) {
      underVally = true;
    }

    if (altitude === 0 && underVally) {
      underVally = false;
      count++;
    }
  }
  return count;
};

test('solution', () => {
  expect(countingValleys(8, 'UDDDUDUU')).toBe(1);
  expect(countingValleys(12, 'DDUUDDUDUUUD')).toBe(2);
});
