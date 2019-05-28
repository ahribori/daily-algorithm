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
    solution([1000000001, 1000000002, 1000000003, 1000000004, 1000000005]),
  ).toEqual(5000000015);
});

test('solution2', () => {
  expect(
    solution2([1000000001, 1000000002, 1000000003, 1000000004, 1000000005]),
  ).toEqual(5000000015);
});
