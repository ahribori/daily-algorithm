/**
 * @param {number[]} nums
 * @return {boolean}
 */
function containsDuplicate(nums) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (map.has(num)) {
      return true;
    }
    map.set(num, 1);
  }
  return false;
}

containsDuplicate([1, 2, 3, 1]);
containsDuplicate([1, 2, 3, 4]);
