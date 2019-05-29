const solution = ar => {
  return ar.reduce((prev, next) => prev + next);
};

const solution2 = ar => {
  let sum = 0;

  for (let i = ar.length - 1; i >= 0; i--) {
    sum = sum + ar[i];
  }

  return sum;
};

test('solution', () => {
  expect(
    solution([1, 2, 3, 4, 10, 11]),
  ).toEqual(31);
});

test('solution2', () => {
  expect(
    solution2([1, 2, 3, 4, 10, 11]),
  ).toEqual(31)
});
