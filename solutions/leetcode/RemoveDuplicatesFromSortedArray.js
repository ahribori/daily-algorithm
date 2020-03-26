const removeDuplicates = function(nums) {
  let min = null;
  let i = 0;
  while (i < nums.length) {
    if (min === null || nums[i] > min) {
      min = nums[i];
      i++;
    } else {
      nums.splice(i, 1);
    }
  }
  return nums.length;
};

removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);
removeDuplicates([1,1,2]);
