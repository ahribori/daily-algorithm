function solution(seoul) {
  return `김서방은 ${seoul.indexOf('Kim')}에 있다`;
}

test('solution', () => {
  expect(solution(['Jain', 'Kim'])).toBe('김서방은 1에 있다');
});
