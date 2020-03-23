function solution(N, stages) {
  const numberOfPlayers = stages.length;
  const stageMap = new Map();
  const failureRates = [];

  for (let i = stages.length - 1; i >= 0; i--) {
    const stage = stages[i];
    if (stageMap.has(stage)) {
      stageMap.set(stage, stageMap.get(stage) + 1);
    } else {
      stageMap.set(stage, 1);
    }
  }

  let player = 0;
  for (let i = 1; i < N + 1; i++) {
    const stage = i;
    const inStage = stageMap.get(stage) || 0;
    if (inStage === 0) {
      failureRates.push([stage, 0]);
    } else {
      failureRates.push([stage, inStage / (numberOfPlayers - player)]);
    }
    player += inStage;
  }
  return failureRates
    .sort((a, b) => b[1] - a[1] || a[0] - b[0])
    .map(item => item[0]);
}

test('solution', () => {
  expect(solution(5, [2, 1, 2, 6, 2, 4, 3, 3])).toStrictEqual([3, 4, 2, 1, 5]);
  expect(solution(4, [4, 4, 4, 4, 4])).toStrictEqual([4, 1, 2, 3]);
  expect(solution(1, [1, 1, 1])).toStrictEqual([1]);
  expect(solution(3, [1, 1, 1])).toStrictEqual([1, 2, 3]);
  expect(solution(3, [4, 4, 4, 4, 4, 4])).toStrictEqual([1, 2, 3]);
  expect(solution(11, [11, 11, 11])).toStrictEqual([11, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
