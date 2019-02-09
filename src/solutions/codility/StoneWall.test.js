const solution = H => {
  const stack = [];
  let currentMaxHeight = 0;
  let result = 0;
  for (let height of H) {
    if (height > currentMaxHeight) {
      stack.push(height - currentMaxHeight);
      currentMaxHeight = height;
    } else if (height < currentMaxHeight) {
      while (height < currentMaxHeight) {
        const popHeight = stack.pop();
        currentMaxHeight = currentMaxHeight - popHeight;
        result++;
      }
      if (height > currentMaxHeight) {
        stack.push(height - currentMaxHeight);
        currentMaxHeight = height;
      }
    }
  }
  return result + stack.length;
};

test('solution', () => {
  expect(solution([8, 8, 5, 7, 9, 8, 7, 4, 8])).toBe(7);
});
/*
8
[8]
8
[8]
5
[] -> 8
[5]
7
[5, 2]
9
[5, 2, 2]
8
[5, 2] -> 2
[5, 2, 1]
7
[5, 2] -> 1
4
[5] -> 2
[] -> 5
[4]
8
[4, 4]

pop & count ++
4

 */
