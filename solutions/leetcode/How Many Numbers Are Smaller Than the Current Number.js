/**
 * @param {number[]} nums
 * @return {number[]}
 */
const smallerNumbersThanCurrent = function(nums) {
  const cache = new Map();
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    let count = 0;
    if (cache.has(nums[i])) {
      result.push(cache.get(nums[i]));
      continue;
    }
    for (let j = 0; j < nums.length; j++) {
      if (j !== i && nums[i] > nums[j]) {
        count++;
      }
    }
    cache.set(nums[i], count);
    result.push(count);
  }
  return result;
};

smallerNumbersThanCurrent([8, 1, 2, 2, 3]);
// smallerNumbersThanCurrent([6, 5, 4, 8]);
// smallerNumbersThanCurrent([7, 7, 7, 7]);
