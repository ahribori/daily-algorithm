var numIslands = function (grid) {
  let answer = 0;
  if (grid.length === 0) return 0;
  const h = grid.length;
  const w = grid[0].length;

  function dfs(i, j) {
    if (i < 0 || j < 0 || i >= h || j >= w || grid[i][j] !== '1') return;

    grid[i][j] = '0';

    dfs(i + 1, j);
    dfs(i - 1, j);
    dfs(i, j + 1);
    dfs(i, j - 1);
  }

  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if (grid[i][j] === '1') {
        answer++;
        dfs(i, j);
      }
    }
  }
};

numIslands([
  ['1', '1', '1', '1', '0'],
  ['1', '1', '0', '1', '0'],
  ['1', '1', '0', '0', '0'],
  ['0', '0', '0', '0', '0'],
]);
