const productExceptSelf = function (nums) {
  const output = [];
  let zeroCount = 0;
  const product = nums.reduce((acc, curr) => {
    if (curr === 0) {
      zeroCount++;
      return acc;
    }
    return acc * curr;
  });
  for (const num of nums) {
    if (zeroCount > 1) {
      output.push(0);
    } else if (zeroCount === 1) {
      output.push(num === 0 ? product : 0);
    } else {
      output.push(product / num);
    }
  }
  return output;
};

console.log(productExceptSelf([1, 2, 3, 4]), [24, 12, 8, 6]);
console.log(productExceptSelf([0, 0]), [0, 0]);
console.log(productExceptSelf([1, 0]), [0, 1]);
