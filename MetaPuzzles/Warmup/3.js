function getHitProbability(R, C, G) {
  let battleShips = 0;

  const rows = G.length;
  const cols = G[0].length;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (G[r][c] === 1) {
        battleShips++;
      }
    }
  }

  return battleShips / (R * C);
}

getHitProbability(3, 3, [
  [1, 0, 0],
  [0, 1, 0],
  [0, 0, 1],
]);
