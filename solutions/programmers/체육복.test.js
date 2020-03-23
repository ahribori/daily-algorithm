function solution(n, lost, reserve) {
  let resolved = 0;
  const lostSet = new Set(lost.filter(item => !reserve.includes(item)));
  const reserveSet = new Set(reserve.filter(item => !lost.includes(item)));

  for (const l of lostSet.values()) {
    for (const r of reserveSet.values()) {
      if (l - r <= 1 && r - l <= 1) {
        resolved++;
        reserveSet.delete(r);
        break;
      }
    }
  }

  return n - lostSet.size + resolved;
}

test('solution', () => {
  expect(solution(5, [2, 4], [1, 3, 5])).toBe(5);
  expect(solution(5, [4, 2], [1, 5, 3])).toBe(5);
  expect(solution(5, [2, 4], [3])).toBe(4);
  expect(solution(3, [3], [1])).toBe(2);
  expect(solution(5, [1], [1])).toBe(5);
  expect(solution(10, [2, 4, 3], [4, 1, 7])).toBe(9);
  expect(solution(10, [6, 4, 3], [4, 1, 7])).toBe(9);
});
