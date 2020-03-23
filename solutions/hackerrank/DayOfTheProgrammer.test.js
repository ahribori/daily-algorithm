const dayOfProgrammer = year => {
  const amountOfDays = [null, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const isGregorian = year >= 1918;

  let isLeafYear;

  if (isGregorian) {
    isLeafYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  } else {
    isLeafYear = year % 4 === 0;
  }

  if (year === 1918) {
    amountOfDays[1] = 18;
  }

  if (isLeafYear) {
    amountOfDays[2] = 29;
  }

  let month = 1;
  let sum = 0;

  while (sum + amountOfDays[month] < 256) {
    sum = sum + amountOfDays[month];
    month++;
  }

  const day = 256 - sum;
  console.log(year, isLeafYear, day);
  return `${day}.${month < 10 && 0}${month}.${year}`;
};

test('solution', () => {
  expect(dayOfProgrammer(2017)).toBe('13.09.2017');
  expect(dayOfProgrammer(2016)).toBe('12.09.2016');
  expect(dayOfProgrammer(1800)).toBe('12.09.1800');
  expect(dayOfProgrammer(1918)).toBe('26.09.1918');
});
