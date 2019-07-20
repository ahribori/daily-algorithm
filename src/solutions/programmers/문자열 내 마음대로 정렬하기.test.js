function solution(strings, n) {
  return strings.sort((a, b) => {
    return a[n] > b[n] ? 1 : a[n] === b[n] ? (a > b ? 1 : -1) : -1;
  });
}

test('solution', () => {
  expect(solution(['sun', 'bed', 'car'], 1)).toStrictEqual([
    'car',
    'bed',
    'sun',
  ]);
  expect(solution(['abce', 'abcd', 'cdx'], 2)).toStrictEqual([
    'abcd',
    'abce',
    'cdx',
  ]);
  expect(solution(['cbcc', 'abcc', 'bbcc'], 1)).toStrictEqual([
    'abcc',
    'bbcc',
    'cbcc',
  ]);
});
