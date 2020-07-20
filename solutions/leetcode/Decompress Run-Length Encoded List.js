/**
 * @param {number[]} nums
 * @return {number[]}
 */
const decompressRLElist = function (nums) {
  let result = [];
  for (let i = 0; i < nums.length; i = i + 2) {
    const freq = nums[i];
    const val = nums[i + 1];
    result = result.concat(Array(freq).fill(val));
  }
  return result;
};

// freq, val = nums[0], nums[1] , nums[2], numse[3]

decompressRLElist([1, 2, 3, 4]);
decompressRLElist([1, 1, 2, 3]);
