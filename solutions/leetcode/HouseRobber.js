function rob(nums) {
  if (nums.length === 0) {
    return 0;
  }
  if (nums.length <= 2) {
    return Math.max(0, ...nums);
  }

  for (let i = 2; i < nums.length; i++) {
    nums[i] += (nums[i - 3] || 0) > nums[i - 2] ? nums[i - 3] : nums[i - 2];
  }

  return Math.max(nums[length - 1], nums[length - 2]);
}

// rob([2, 7, 9, 3, 1]);

rob([1, 2, 3, 20, 4, 2]);
