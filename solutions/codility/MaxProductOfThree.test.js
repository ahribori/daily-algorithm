const solution = A => {
  const sortedA = A.sort((a, b) => b - a);
  const pos = [];
  const neg = [];

  sortedA.forEach(number => {
    if (number > 0) {
      pos.push(number);
    } else {
      neg.push(number);
    }
  });

  const posMulti = pos[0] * pos[1] || 0;
  const negMulti = neg[neg.length - 1] * neg[neg.length - 2] || 0;
  const result =
    posMulti * pos[2] > negMulti * pos[0]
      ? posMulti * pos[2]
      : negMulti * pos[0];

  if (pos.length === 0) {
    return neg[0] * neg[1] * neg[2];
  }

  return result;
};

test('solution', () => {
  expect(solution([-3, 1, 2, -2, 5, 6])).toBe(60);
  expect(solution([-5, 5, -5, 4])).toBe(125);
  expect(solution([2, 100, 3, -1000])).toBe(600);
  expect(solution([-10, -2, -4])).toBe(-80);
  expect(solution([-5, -6, -4, -7, -10])).toBe(-120);
  expect(solution([4, 7, 3, 2, 1, -3, -5])).toBe(105);
});
