function solution(priorities, location) {
  let answer = 0;

  const tasks = priorities.map((p, i) => ({ p, isTarget: i === location }));

  while (true) {
    const current = tasks.shift();
    if (tasks.some(t => t.p > current.p)) {
      tasks.push(current);
    } else {
      answer++;
      if (current.isTarget) {
        return answer;
      }
    }
  }
}

test('solution', () => {
  expect(solution([2, 1, 3, 2], 2)).toBe(1);
  expect(solution([1, 1, 9, 1, 1, 1], 0)).toBe(5);
});
