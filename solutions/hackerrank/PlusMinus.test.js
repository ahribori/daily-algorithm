const solution = arr => {
  const totalCount = arr.length;
  let positiveNumberCount = 0;
  let negativeNumberCount = 0;
  let zeroCount = 0;

  for (let i = 0; i < totalCount; i++) {
    const num = arr[i];
    if (num > 0) {
      positiveNumberCount++;
    } else if (num < 0) {
      negativeNumberCount++;
    } else {
      zeroCount++;
    }
  }

  console.log(positiveNumberCount / totalCount);
  console.log(negativeNumberCount / totalCount);
  console.log(zeroCount / totalCount);
};

test('solution', () => {
  solution([-4, 3, -9, 0, 4, 1]);
});
