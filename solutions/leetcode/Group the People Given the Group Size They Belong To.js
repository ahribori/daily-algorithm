/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
const groupThePeople = function (groupSizes) {
  const reulst = [];
  const tempGroup = [];

  for (let i = 0; i < groupSizes.length; i++) {
    const num = i;
    const groupSize = groupSizes[i];

    if (tempGroup[groupSize]) {
      tempGroup[groupSize].push(num);
    } else {
      tempGroup[groupSize] = [num];
    }

    if (tempGroup[groupSize].length === groupSize) {
      reulst.push(tempGroup[groupSize]);
      tempGroup[groupSize] = undefined;
    }
  }
  return reulst;
};

groupThePeople([3, 3, 3, 3, 3, 1, 3]);
groupThePeople([2, 1, 3, 3, 3, 2]);
