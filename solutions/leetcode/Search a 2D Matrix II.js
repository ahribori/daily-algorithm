/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const searchMatrix = function (matrix, target) {
  if (matrix.length === 0 || matrix[0].length === 0) return false;
  let row = 0,
    col = matrix[0].length - 1;
  while (col >= 0 && row <= matrix.length - 1) {
    const current = matrix[row][col];
    console.log(current);
    if (current === target) {
      return true;
    } else if (current < target) {
      row++;
    } else {
      col--;
    }
  }
  return false;
};
//
// searchMatrix(
//   [
//     [1, 4, 7, 11, 15],
//     [2, 5, 8, 12, 19],
//     [3, 6, 9, 16, 22],
//     [10, 13, 14, 17, 24],
//     [18, 21, 23, 26, 30],
//   ],
//   5,
// );
searchMatrix([], 3);
//
// searchMatrix(
//   [
//     [1, 4, 7, 11, 15],
//     [2, 5, 8, 12, 19],
//     [3, 6, 9, 16, 22],
//     [10, 13, 14, 17, 24],
//     [18, 21, 23, 26, 30],
//   ],
//   20,
// );
