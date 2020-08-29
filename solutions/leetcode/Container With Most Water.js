/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = function (height) {
  let max = 0;
  let p1 = 0,
    p2 = height.length - 1;

  while (p1 < p2) {
    max = Math.max(Math.min(height[p1], height[p2]) * (p2 - p1), max);
    if (height[p1] < height[p2]) {
      p1++;
    } else {
      p2--;
    }
  }
  return max;
};

// maxArea([1, 2, 3, 2]);

maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]);
