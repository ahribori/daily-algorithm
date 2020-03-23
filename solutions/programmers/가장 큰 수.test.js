function solution(numbers) {
  const answer = numbers
    .map(item => item.toString())
    .sort((a, b) => {
      return parseInt(b + a) - parseInt(a + b);
    })
    .join('');

  return answer.startsWith('0') ? '0' : answer;
}

test('solution', () => {
  expect(solution([6, 10, 2])).toBe('6210');
  expect(solution([3, 30, 34, 5, 9])).toBe('9534330');
  expect(solution([0, 0, 0, 0])).toBe('0');
});
