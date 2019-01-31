const solution = A => {
  let forward = 0;
  let numberOfPairs = 0;
  for (let i = 0, length = A.length; i < length; i++) {
    const direction = A[i];
    if (direction === 0) {
      forward++;
    } else {
      numberOfPairs = numberOfPairs + forward;
    }
    if (numberOfPairs > 1000000000) {
      return -1;
    }
  }
  return numberOfPairs;
};

test('solution', () => {
  expect(solution([0, 1, 0, 1, 1])).toBe(5);
});
