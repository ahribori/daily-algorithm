const shuffle = function(nums, n) {
  const result = [];
  for (let i = 0; i < n; i++) {
    const x = nums[i];
    const y = nums[n + i];
    result.push(x);
    result.push(y);
  }
  return result;
};

shuffle([2, 5, 1, 3, 4, 7], 3);
shuffle([1, 2, 3, 4, 4, 3, 2, 1], 4);
shuffle([1, 1, 2, 2], 2);
