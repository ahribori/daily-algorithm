function solution(progresses, speeds) {
  const answer = [];

  let count = 0;
  while (progresses.length > 0) {
    const length = progresses.length;
    count = 0;

    for (let i = 0; i < length; i++) {
      progresses[i] += speeds[i];
    }

    while (progresses[0] >= 100) {
      progresses.shift();
      speeds.shift();
      count++;
    }
    if (count > 0) {
      answer.push(count);
    }
  }

  return answer;
}

test('solution', () => {
  expect(solution([93, 30, 55], [1, 30, 5])).toStrictEqual([2, 1]);
});
