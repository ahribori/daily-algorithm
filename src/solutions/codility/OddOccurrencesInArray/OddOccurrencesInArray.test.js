const {
  createArrayOfRandomNumbers,
} = require('../../../helpers/test-case-helper');

const { solution1, solution2 } = require('./OddOccurrencesInArray');

test('s1_tc1', () => {
  expect(solution1([9, 3, 9, 3, 9, 7, 9])).toBe(7);
});

test('s1_tc2', () => {
  const randomArray = createArrayOfRandomNumbers(1000000, 1, 1000000000);
  expect(solution1([999999999, ...randomArray, ...randomArray])).toBe(999999999);
});

test('s2_tc1', () => {
  expect(solution2([9, 3, 9, 3, 9, 7, 9])).toBe(7);
});

test('s2_tc2', () => {
  const randomArray = createArrayOfRandomNumbers(1000000, 1, 1000000000);
  expect(solution2([999999999, ...randomArray, ...randomArray])).toBe(999999999);
});
