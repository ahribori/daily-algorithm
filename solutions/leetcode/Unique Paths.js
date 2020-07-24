/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! 시간초과 failed
 */
const uniquePaths = function (m, n) {
  let answer = 0;
  function dfs(x, y) {
    if (x === m && y === n) {
      answer++;
    }
    if (x < m) {
      dfs(x + 1, y);
    }
    if (y < n) {
      dfs(x, y + 1);
    }
  }
  dfs(1, 1);
  return answer;
};

const uniquePaths2 = function (m, n) {
  const memo = new Map();
  function factorial(N) {
    if (N <= 1) return 1;
    let next;
    if (memo.has(N - 1)) {
      next = memo.get(N - 1);
    } else {
      next = factorial(N - 1);
      memo.set(N - 1, next);
    }
    return N * next;
  }

  return Math.round(
    factorial(m + n - 2) / (factorial(m - 1) * factorial(n - 1)),
  );
};

console.log(uniquePaths2(3, 2)); // 3
console.log(uniquePaths2(7, 3)); // 28
console.log(uniquePaths2(9, 51)); //
