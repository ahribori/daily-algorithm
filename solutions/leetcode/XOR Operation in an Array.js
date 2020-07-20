/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
const xorOperation = function(n, start) {
  const nums = Array.from(new Array(n)).map((_, index) => start + 2 * index);
  return nums.reduce((prev, curr) => prev ^ curr);
};

xorOperation(5, 0);
xorOperation(4, 3);
