/**
 * @param {number[][]} rectangle
 */
const SubrectangleQueries = function(rectangle) {
  this.rectangle = rectangle;
};

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @param {number} newValue
 * @return {void}
 */
SubrectangleQueries.prototype.updateSubrectangle = function(
  row1,
  col1,
  row2,
  col2,
  newValue,
) {
  for (let r = row1; r <= row2; r++) {
    for (let c = col1; c <= col2; c++) {
      this.rectangle[r][c] = newValue;
    }
  }
  console.log(this.rectangle);
};

/**
 * @param {number} row
 * @param {number} col
 * @return {number}
 */
SubrectangleQueries.prototype.getValue = function(row, col) {
  console.log('getValue', this.rectangle[row][col]);
  return this.rectangle[row][col];
};

/**
 * Your SubrectangleQueries object will be instantiated and called as such:
 * var obj = new SubrectangleQueries(rectangle)
 * obj.updateSubrectangle(row1,col1,row2,col2,newValue)
 * var param_2 = obj.getValue(row,col)
 */

const rectangle1 = new SubrectangleQueries([
  [1, 2, 1],
  [4, 3, 4],
  [3, 2, 1],
  [1, 1, 1],
]);

rectangle1.getValue(0, 3);
rectangle1.updateSubrectangle(0, 0, 2, 2, 100);
