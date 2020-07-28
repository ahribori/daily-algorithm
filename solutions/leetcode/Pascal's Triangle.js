/**
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = function (numRows) {
  const answer = [];
  for (let i = 0; i < numRows; i++) {
    if (!answer[i]) {
      answer[i] = [];
    }
    for (let j = 0; j < i + 1; j++) {
      answer[i][j] =
        i === 0 || j === 0 || j === i
          ? 1
          : answer[i - 1][j - 1] + answer[i - 1][j];
    }
  }
  return answer;
};

generate(5);
