function searchInsert(nums, target) {
  let startIndex = 0;
  let endIndex = nums.length - 1;
  let centerIndex;
  let centerNode;

  while (startIndex <= endIndex) {
    centerIndex = Math.floor((startIndex + endIndex) / 2);
    centerNode = nums[centerIndex];
    if (centerNode < target) {
      startIndex = centerIndex + 1;
    } else {
      endIndex = centerIndex - 1;
    }
  }
  return centerNode >= target ? centerIndex : centerIndex + 1;
}

// searchInsert([1, 3, 5, 6], 5);
// searchInsert([1, 3, 5, 6], 2);
// searchInsert([1, 3, 5, 6], 7);
// searchInsert([7], 7);
// searchInsert([1, 3, 5, 6], 0);
