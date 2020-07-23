/**
 * @param {number[]} nums
 * @return {number}
 */
const findDuplicate = function (nums) {
  const sortedNums = nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    const num = sortedNums[i];
    const nextNum = sortedNums[i + 1];
    if (num - nextNum === 0) {
      return num;
    }
  }
};

findDuplicate([1, 3, 4, 2, 2]);
findDuplicate([3, 1, 3, 4, 2]);
findDuplicate([5, 6, 7, 7, 9]);
