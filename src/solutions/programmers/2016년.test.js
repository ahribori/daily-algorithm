function solution(a, b) {
  const amountOfDays = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const dayOfWeek = ['THU', 'FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED'];
  const sum =
    amountOfDays
      .filter((_, index) => index < a - 1)
      .reduce((prev, next) => prev + next, 0) + b;

  return dayOfWeek[sum % 7];
}

test('solution', () => {
  expect(solution(1, 1)).toBe('FRI');
  expect(solution(5, 24)).toBe('TUE');
  expect(solution(1, 31)).toBe('SUN');
});
