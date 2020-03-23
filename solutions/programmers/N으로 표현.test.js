function solution(N, number) {

  let answer = 0;

  return answer <= 8 ? answer : -1;
}

test('solution', () => {
  expect(solution(5, 12)).toBe(4);
  expect(solution(2, 11)).toBe(3);
});
