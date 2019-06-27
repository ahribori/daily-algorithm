function solution(answers) {
  const supojaList = [
    { id: 1, score: 0, pattern: [1, 2, 3, 4, 5] },
    { id: 2, score: 0, pattern: [2, 1, 2, 3, 2, 4, 2, 5] },
    { id: 3, score: 0, pattern: [3, 3, 1, 1, 2, 2, 4, 4, 5, 5] },
  ];

  let indexA = 0;
  let indexB = 0;
  let indexC = 0;

  answers.forEach(item => {
    if (item === supojaList[0].pattern[indexA]) {
      supojaList[0].score++;
    }
    if (item === supojaList[1].pattern[indexB]) {
      supojaList[1].score++;
    }
    if (item === supojaList[2].pattern[indexC]) {
      supojaList[2].score++;
    }

    indexA = indexA < 4 ? indexA + 1 : 0;
    indexB = indexB < 7 ? indexB + 1 : 0;
    indexC = indexC < 9 ? indexC + 1 : 0;
  });

  const temp = [];

  supojaList
    .sort((a, b) => b.score - a.score)
    .forEach(score => {
      if (temp.length === 0) {
        temp.push(score);
      } else if (score.score === temp[0].score) {
        temp.push(score);
      }
    });

  return temp.map(item => item.id);
}

test('solution', () => {
  expect(solution([1, 2, 3, 4, 5])).toStrictEqual([1]);
  expect(solution([1, 3, 2, 4, 2])).toStrictEqual([1, 2, 3]);
  expect(solution([0, 0, 0, 0, 0])).toStrictEqual([1, 2, 3]);
  expect(solution([1, 2, 3, 4, 5, 1, 2, 3, 4, 5])).toStrictEqual([1]);
});
