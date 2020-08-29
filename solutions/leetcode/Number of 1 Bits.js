/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  return n
    .toString(2)
    .split('')
    .reduce((p, c) => p * 1 + c * 1);
};

const a = hammingWeight(11); //3
// hammingWeight('00000000000000000000000010000000'); //1
// hammingWeight('11111111111111111111111111111101'); //31
