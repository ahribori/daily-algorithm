function solution(n, computers) {
  let answer = 0;
  const visited = [];

  function dfs(original, i) {
    if (visited[i]) {
      return 0;
    }

    visited[i] = true;
    for (let j = 0; j < original.length; j++) {
      if (original[i][j] === 1) {
        dfs(original, j);
      }
    }

    return 1;
  }

  for (let i = 0; i < n; i++) {
    answer += dfs(computers, i);
  }

  console.log(answer);
}

solution(3, [
  [1, 1, 0],
  [1, 1, 0],
  [0, 0, 1],
]);
// solution(3, [
//   [1, 1, 0],
//   [1, 1, 1],
//   [0, 1, 1],
// ]);
