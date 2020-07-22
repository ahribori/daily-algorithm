/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = function (n) {
  const answer = [];

  function backtrack(left, right, n, str) {
    console.log(left, right, n, str);
    if (left === n && right === n) {
      answer.push(str);
    }
    if (left < n) {
      backtrack(left + 1, right, n, str + '(');
    }
    if (left > right) {
      backtrack(left, right + 1, n, str + ')');
    }
  }

  backtrack(1, 0, n, '(');

  console.log(answer);
  return answer;
};

generateParenthesis(3);
