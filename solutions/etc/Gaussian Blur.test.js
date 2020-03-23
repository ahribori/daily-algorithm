const gaussian = () => {
  const width = 8000;
  const height = 8000;

  const createMatrix = (w, h) => {
    const matrix = [];
    for (let i = 0; i < h; i++) {
      const row = [];
      for (let j = 0; j < w; j++) {
        row.push(Math.round(Math.random() * 255));
      }
      matrix.push(row);
    }
    return matrix;
  };

  const getAverageByIdx = (rowIndex, colIndex, matrix) => {
    const width = matrix[0].length;
    const height = matrix.length;
    const topLeft = rowIndex - 1 > -1 && colIndex - 1 > -1 ? matrix[rowIndex - 1][colIndex - 1] : null;
    const topCenter = rowIndex - 1 > -1 ? matrix[rowIndex - 1][colIndex] : null;
    const topRight = rowIndex - 1 > -1 && colIndex + 1 < width ? matrix[rowIndex - 1][colIndex + 1] : null;
    const left = colIndex - 1 > -1 ? matrix[rowIndex][colIndex - 1] : null;
    const self = matrix[rowIndex][colIndex];
    const right = colIndex + 1 < width ? matrix[rowIndex][colIndex + 1] : null;
    const bottomLeft = rowIndex + 1 < height && colIndex - 1 > -1 ? matrix[rowIndex + 1][colIndex - 1] : null;
    const bottomCenter = rowIndex + 1 < height ? matrix[rowIndex + 1][colIndex] : null;
    const bottomRight = rowIndex + 1 < height && rowIndex + 1 < width ? matrix[rowIndex + 1][colIndex + 1] : null;

    const adjacentItems =
      [
        topLeft,    topCenter,    topRight,
        left,       self,         right,
        bottomLeft, bottomCenter, bottomRight
      ].filter(item => !!item);

    return adjacentItems.reduce((p, n) => p + n, 0) / adjacentItems.length;
  };

  const createResultArray = matrix => {
    const resultArray = [];
    for (let r = 0; r < height; r ++) {
      resultArray.push([]);
      for (let c = 0; c < width; c ++) {
        resultArray[r].push(getAverageByIdx(r, c, matrix))
      }
    }
    return resultArray;
  };

  const matrix = createMatrix(width, height);
  const resultArray = createResultArray(matrix);

};

gaussian();
