/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  if (height.length === 0) return 0;
  const length = height.length;

  let max = Math.max(...height);

  const totalVolume = height.reduce((acc, height) => acc + height);

  /**
   * from left
   */
  let tempMax = Number.MIN_VALUE;
  let leftSum = 0;
  let leftBreakIndex = 0;
  for (let i = 0; i < length; i++) {
    const h = height[i];
    if (h === max) {
      leftBreakIndex = i;
      break;
    }
    if (tempMax < h) tempMax = h;
    leftSum += tempMax;
  }

  /**
   * from right
   */
  tempMax = Number.MIN_VALUE;
  let rightSum = 0;
  let rightBreakIndex = length - 1;
  for (let i = length - 1; i >= 0; i--) {
    const h = height[i];
    if (h === max) {
      rightBreakIndex = i;
      break;
    }
    if (tempMax < h) tempMax = h;
    rightSum += tempMax;
  }

  const middleSum =
    leftBreakIndex === rightBreakIndex
      ? max
      : (rightBreakIndex - leftBreakIndex + 1) * max;

  return leftSum + middleSum + rightSum - totalVolume;
};

// trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]);
// trap([4, 2, 0, 3, 2, 5]);
trap([4, 2, 3]);
