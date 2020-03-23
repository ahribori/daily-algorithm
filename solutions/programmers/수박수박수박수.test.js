function solution(n) {
  let answer = '';
  const pattern = ['수', '박'];

  const length = pattern.length;
  for (let i = 0; i < n; i++) {
    const idx = i % length;
    answer += pattern[idx];
  }

  return answer;
}

test('solution', () => {
  expect(solution(3)).toBe("수박수");
  expect(solution(4)).toBe("수박수박");
});
