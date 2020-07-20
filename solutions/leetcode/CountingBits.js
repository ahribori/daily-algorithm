/**
 * @param {number} num
 * @return {number[]}
 */
const countBits = function (num) {
  const result = [];
  for (let i = 0; i <= num; i++) {
    const binary = i.toString(2);
    result.push(binary.split('').filter((item) => item > 0 && item < 2).length);
  }
  return result;
};

/**
 * @param {number} num
 * @return {number[]}
 */
const countBits2 = function (num) {
  if (num === 0) return [0];
  if (num === 1) return [0, 1];

  const result = [0, 1];

  for (let i = 2; i <= num; i++) {
    if (i % 2 === 0) {
      result.push(result[i / 2]);
    } else {
      result.push(result[i - 1] + 1);
    }
  }

  console.log(result);

  return result;
};

// countBits(2);
// countBits(5);
// countBits2(2);
// countBits2(1);
countBits2(5);
