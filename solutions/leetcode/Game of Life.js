/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
const gameOfLife = function (board) {
  const width = board[0].length;
  const height = board.length;
  const answer = [];
  const _board = [];

  for (let i = 0; i < height; i++) {
    _board.push(Object.assign([], board[i]))
  }


  for (let i = 0; i < height; i++) {
    answer[i] = [];
  }

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      if (!_board[y - 1]) _board[y - 1] = [];
      if (!_board[y + 1]) _board[y + 1] = [];

      const neighbors = [
        _board[y - 1][x - 1],
        _board[y - 1][x],
        _board[y - 1][x + 1],
        _board[y][x - 1],
        _board[y][x + 1],
        _board[y + 1][x - 1],
        _board[y + 1][x],
        _board[y + 1][x + 1],
      ];
      let liveCells = 0;
      let deadCells = 0;

      /**
       * 1. 주위에 live가 2개 미만이면 인구부족으로 죽는다.
       * 2. 주위에 live가 3개 초과이면 인구과잉으로 죽는다.
       * 3. 주위에 live가 2~3 이면 산다.
       * 4. 죽었더라도 주위에 live가 3개이면 다시 산다.
       */
      let nextState = _board[y][x];

      for (let i = 0; i < 8; i++) {
        if (neighbors[i] !== undefined) {
          if (neighbors[i] > 0) {
            liveCells++;
          } else {
            deadCells++;
          }
        }
      }

      if (liveCells < 2) {
        nextState = 0;
      } else if (liveCells > 3) {
        nextState = 0;
      } else if (liveCells === 3) {
        nextState = 1;
      }

      board[y][x] = nextState;
    }
  }
  console.log(board);
  return board;
};

gameOfLife([
  [0, 1, 0],
  [0, 0, 1],
  [1, 1, 1],
  [0, 0, 0],
]);
