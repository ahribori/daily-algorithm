const twoSum = (nums, target) => {
  for (let i = nums.length - 1; i >= 0; i --) {
    for (let j = i - 1; j >= 0; j --) {
      if (nums[i] + nums[j] === target) {
        return [j, i]
      }
    }
  }
};

twoSum([2,7,11,15], 9);

