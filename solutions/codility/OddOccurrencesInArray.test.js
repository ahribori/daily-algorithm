const {
  createArrayOfRandomNumbers,
} = require('../../helpers/test-case-helper');

/**
 * Set으로 중복제거 한 뒤 다음 마지막 남은 하나를 리턴
 */
const solution1 = N => {
  const set = new Set();

  for (let i = 0, len = N.length; i < len; i++) {
    const number = N[i];
    if (!set.has(number)) {
      set.add(number);
    } else {
      set.delete(number);
    }
  }

  let result;
  for (let key of set.keys()) {
    result = key;
  }
  return result;
};

/**
 * XOR 연산을 누산해서 마지막 남은 숫자를 리턴
 */
const solution2 = N => {
  return N.reduce((prev, current) => prev ^ current);
};

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
