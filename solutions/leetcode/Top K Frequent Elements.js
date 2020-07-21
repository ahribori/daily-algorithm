/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const topKFrequent = function (nums, k) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (!map.has(num)) {
      map.set(num, 1);
    } else {
      map.set(num, map.get(num) + 1);
    }
  }

  const temp = [];

  for (const [k, v] of map) {
    temp.push([k, v]);
  }

  return temp
    .sort((a, b) => b[1] - a[1])
    .filter((value, index) => index < k)
    .map((value) => value[0]);
};

topKFrequent([4, 1, -1, 2, -1, 2, 3], 2);
// topKFrequent([1, 1, 1, 2, 2, 3], 2);
// topKFrequent([1], 1);
// topKFrequent([3, 4, 1, 1, 2], 1);
