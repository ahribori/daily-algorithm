const moveZeros = (nums) => {
  let count = 0;
  for (let i = 0; i < nums.length; ) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      count++;
    } else {
      i++;
    }
  }

  for (let i = 0; i < count; i++) {
    nums.push(0);
  }

  console.log(nums);
};

moveZeros([0, 1, 0, 3, 12]);
