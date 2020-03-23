function solution(array, commands) {
  const answer = [];
  commands.forEach(command => {
    const [start, end, n] = command;
    const slicedArray = array.slice(start - 1, end);
    const sortedArray = slicedArray.sort((a, b) => a - b);
    answer.push(sortedArray[n - 1]);
  });
  return answer;
}

test('solution', () => {
  expect(
    solution([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]]),
  ).toStrictEqual([5, 6, 3]);
});
