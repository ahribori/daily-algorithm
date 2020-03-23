function solution(arr, divisor) {
  const answer = arr.filter(num => num % divisor === 0).sort((a, b) => a - b);
  return answer.length > 0 ? answer : [-1];
}

test('solution', () => {
  expect(solution([5, 9, 7, 10], 5)).toStrictEqual([5, 10]);
  expect(solution([2, 36, 1, 3], 1)).toStrictEqual([1, 2, 3, 36]);
  expect(solution([3, 2, 6], 10)).toStrictEqual([-1]);
});
