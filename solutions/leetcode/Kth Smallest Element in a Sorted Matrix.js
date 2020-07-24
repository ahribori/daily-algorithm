/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
const kthSmallest = function (matrix, k) {
  return matrix.flat().sort((a, b) => a - b)[k - 1];
};

kthSmallest(
  [
    [1, 5, 9],
    [10, 11, 13],
    [12, 13, 15],
  ],
  8,
);
