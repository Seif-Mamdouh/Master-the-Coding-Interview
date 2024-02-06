var orangesRotting = function (grid) {
  const q = [];
  let fresh = 0;
  let time = 0;

  let rows = grid.length;
  let cols = grid[0].length;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === 1) {
        fresh += 1;
      }
      if (grid[r][c] === 2) {
        q.push([r, c]);
      }
    }
  }

  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  while (fresh > 0 && q.length > 0) {
    const length = q.length;
    for (let i = 0; i < length; i++) {
      const [row, column] = q.shift();

      for (const [dr, dc] of directions) {
        const newRow = row + dr;
        const newCol = column + dc;
        // if in bounds and nonrotten, make rotten
        // and add to q
        if (
          newRow >= 0 &&
          newRow < rows &&
          newCol >= 0 &&
          newCol < cols &&
          grid[newRow][newCol] === 1
        ) {
          grid[newRow][newCol] = 2;
          q.push([newRow, newCol]);
          fresh -= 1;
        }
      }
    }
    time += 1;
  }

  if (fresh === 0) {
    return time;
  } else {
    return -1;
  }
};
