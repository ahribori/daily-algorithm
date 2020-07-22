/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const rotate = function (matrix) {
  function swap(r1, c1, r2, c2) {
    let temp = matrix[r1][c1];
    matrix[r1][c1] = matrix[r2][c2];
    matrix[r2][c2] = temp;
  }

  const size = matrix.length;
  matrix = matrix.reverse();
  // swap(0,0, 1,2)

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (i !== j && i < j) {
        swap(i, j, j, i);
      }
    }
  }
  return matrix;
};

rotate([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);

// rotate([
//   [5, 1, 9, 11],
//   [2, 4, 8, 10],
//   [13, 3, 6, 7],
//   [15, 14, 12, 16],
// ]);
