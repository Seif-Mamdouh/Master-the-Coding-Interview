/*
695. Max Area of Island


Add to List

Share
You are given an m x n binary matrix grid. An island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.

The area of an island is the number of cells with a value 1 in the island.

Return the maximum area of an island in grid. If there is no island, return 0.

 

Example 1:


Input: grid = [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]
Output: 6
Explanation: The answer is not 11, because the island must be connected 4-directionally.
Example 2:

Input: grid = [[0,0,0,0,0,0,0,0]]
Output: 0


*/
function max_area_islands_DFS(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  let biggestIslandArea = 0;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (matrix[i][j] === 1) {
        // only if the cell is a land
        // we have found an island
        biggestIslandArea = Math.max(
          biggestIslandArea,
          visit_island_DFS(matrix, i, j)
        );
      }
    }
  }
  return biggestIslandArea;
}

function visit_island_DFS(matrix, x, y) {
  if (x < 0 || x >= matrix.length || y < 0 || y >= matrix[0].length) return 0; // return, if it is not a valid cell
  if (matrix[x][y] === 0) return 0; // return, if it is a water cell

  matrix[x][y] = 0; // mark the cell visited by making it a water cell

  let area = 1; // counting the current cell
  // recursively visit all neighboring cells (horizontally & vertically)
  area += visit_island_DFS(matrix, x + 1, y); // lower cell
  area += visit_island_DFS(matrix, x - 1, y); // upper cell
  area += visit_island_DFS(matrix, x, y + 1); // right cell
  area += visit_island_DFS(matrix, x, y - 1); // left cell

  return area;
}


console.log(
  max_area_islands_DFS([
    [1, 1, 1, 0, 0],
    [0, 1, 0, 0, 1],
    [0, 0, 1, 1, 0],
    [0, 1, 1, 0, 0],
    [0, 0, 1, 0, 0],
  ])
);



