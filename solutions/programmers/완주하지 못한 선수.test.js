function solution(participant, completion) {
  const map = new Map();
  participant.forEach(p => {
    if (!map.has(p)) {
      map.set(p, 0);
    } else {
      map.set(p, map.get(p) + 1);
    }
  });

  completion.forEach(c => {
    if (map.has(c)) {
      map.set(c, map.get(c) - 1);
    }
  });

  let answer = '';

  for (const [key, value] of map.entries()) {
    if (value === 0) {
      answer = key;
    }
  }
  return answer;
}

test('solution', () => {
  expect(solution(['leo', 'kiki', 'eden'], ['eden', 'kiki'])).toBe('leo');
  expect(
    solution(
      ['marina', 'josipa', 'nikola', 'vinko', 'filipa'],
      ['josipa', 'filipa', 'marina', 'nikola'],
    ),
  ).toBe('vinko');
  expect(
    solution(
      ['mislav', 'stanko', 'mislav', 'ana'],
      ['stanko', 'ana', 'mislav'],
    ),
  ).toBe('mislav');
});
