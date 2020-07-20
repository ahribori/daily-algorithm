/**
 * @param {number[]} nums
 * @return {number}
 */
const numIdenticalPairs = function(nums) {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      if (i < j && nums[i] === nums[j]) {
        result++;
      }
    }
  }
  return result;
};

numIdenticalPairs([1, 2, 3, 1, 1, 3]); // 4

numIdenticalPairs([1, 1, 1, 1]); // 6

numIdenticalPairs([1, 2, 3]); // 0
