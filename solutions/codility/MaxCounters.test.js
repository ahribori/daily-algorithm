const solution = (N, A) => {
  let counter = Array.from(Array(N)).map(() => 0);
  let tempMax = 0;
  let max = 0;

  for (let i = 0, length = A.length; i < length; i++) {
    const number = A[i];
    if (number > N) {
      max = tempMax;
    } else {
      if (counter[number - 1] < max) {
        counter[number - 1] = max;
      }

      counter[number - 1]++;

      if (counter[number - 1] > tempMax) {
        tempMax = counter[number - 1];
      }
    }
  }

  counter = counter.map((number) => {
    if (number < max) {
      return max;
    }
    return number;
  });

  return counter;
};

test('solution', () => {
  expect(solution(5, [3, 4, 4, 6, 1, 4, 4])).toEqual([3, 2, 2, 4, 2]);
});
