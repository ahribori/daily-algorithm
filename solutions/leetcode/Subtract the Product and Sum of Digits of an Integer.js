/**
 * @param {number} n
 * @return {number}
 */
const subtractProductAndSum = function (n) {
  let product = 1;
  let sum = 0;

  const nums = n.toString().split('');
  for (let i = 0; i < nums.length; i++) {
    product = product * nums[i];
    sum = sum + nums[i] * 1;
  }
  return product - sum;
};

subtractProductAndSum(234);
