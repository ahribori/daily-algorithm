/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findKthLargest = function (nums, k) {
  return nums.sort((a, b) => b - a)[k - 1];
};

// findKthLargest([3, 2, 1, 5, 6, 4], 2);
findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4);
