/**
 * 카데인 알고리즘
 *
 * 최대 연속 부분 수열의 합을 O(n)에 구할 수 있다.
 *
 * 1. 수의 합을 반복적으로 구한다.
 * 2. 합이 음수이면 합을 0으로 초기화하고 그 다음수부터 다시 시작한다.
 * 3. 합의 최대값을 구한다.
 */

const maxSubArray = function(nums) {
  let sum = 0;
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    sum += num;

    if (sum < 0) {
      sum = 0;
    }

    if (sum > max) {
      max = sum;
    }
    console.log(max, sum);
  }
  return max > 0 ? max : Math.max(...nums);
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubArray([-2]));
