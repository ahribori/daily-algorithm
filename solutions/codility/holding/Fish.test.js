const solution = (A, B) => {
  const stack = [];
  const length = A.length;
  let aliveCount = 0;
  for (let i = 0; i < length; i++) {
    const size = A[i];
    const upstream = B[i] === 1;
    if (upstream) {
      stack.push(size);
    } else {
      const stackSize = stack.length;
      if (stackSize > 0) {
        if (stack[stackSize - 1] < size) {
          stack.pop();
          if (stack.length === 0) {
            aliveCount++;
          }
        }
      } else {
        aliveCount++;
      }
    }
  }
  return aliveCount + stack.length;
};

test('solution', () => {
  // --------------------------------------------> upstream
  expect(solution([4, 3, 2, 1, 5], [0, 1, 0, 0, 0])).toBe(2);
  expect(solution([0, 1], [1, 1])).toBe(2);
  // expect(
  //   solution([1, 3, 5, 7, 9, 8, 6, 4, 2], [0, 1, 0, 1, 0, 1, 0, 1, 0]),
  // ).toBe(5);
  // expect(solution([1, 2, 3, 4, 5], [0, 0, 0, 0, 0])).toBe(5);
  // expect(solution([1, 2, 3, 4, 5], [1, 1, 1, 1, 1])).toBe(5);
});
