/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersect = function (nums1, nums2) {
  const result = [];
  const count = {};
  for (let i = 0; i < nums1.length; i++) {
    const curr = nums1[i]
    if (count[curr] === undefined) {
      count[curr] = 1;
    } else {
      count[curr] ++;
    }
  }

  for (let i = 0; i < nums2.length; i++) {
    const curr = nums2[i]
    if (count[curr] > 0) {
      result.push(curr);
      count[curr] --;
    }
  }
  console.log(count)
  console.log(result)
  return result;
};

// intersect([1, 2, 2, 1], [2, 2]);
// intersect([4, 9, 5], [9, 4, 9, 8, 4]);
intersect([2, 1], [1, 1]);
