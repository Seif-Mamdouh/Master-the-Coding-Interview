var updateMatrix = function (mat) {
  let rows = mat.length;
  let cols = mat[0].length;
  let queue = [];

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (mat[r][c] === 0) {
        queue.push([r, c]);
      } else {
        mat[r][c] == "#";
      }
    }
  }

  while (queue.length > 0) {
    const [row, column] = queue.shift();
    const directions = [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ];

    for (const [dr, dc] of directions) {
      const newRow = row + dr;
      const newCol = column + dc;

      if (
        newRow >= 0 &&
        newRow < rows &&
        newCol >= 0 &&
        newCol < cols &&
        mat[row][column] === "#"
      ) {
        mat[newRow][newColumn] == mat[row][column] + 1;
        queue.push([newRow, newColumn]);
      }
    }
  }

  return mat;
};
