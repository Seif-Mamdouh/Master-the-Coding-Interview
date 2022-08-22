/*
200. Number of Islands
Medium

15772

367

Add to List

Share
Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

 

Example 1:

Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1
Example 2:

Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3

Matrix: 

0, 1, 1, 1, 0
0, 0, 0, 1, 1
0, 1, 1, 1, 0
0, 1, 1, 0, 0
0, 0, 0, 0, 0

1, 1, 1, 0, 0
0, 1, 0, 0, 1
0, 0, 1, 1, 0
0, 0, 1, 0, 0
0, 0, 1, 0, 0


answer = 3

*/

function count_islands_DFS(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  let totalIslands = 0;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (matrix[i][j] === 1) {
        // only if the cell is a land
        // we have found an island
        totalIslands++;
        visit_island_DFS(matrix, i, j);
      }
    }
  }
  return totalIslands;
}

function visit_island_DFS(matrix, x, y) {
  if (x < 0 || x >= matrix.length || y < 0 || y >= matrix[0].length) return; // return, if it is not a valid cell
  if (matrix[x][y] === 0) return; // return, if it is a water cell

  matrix[x][y] = 0; // mark the cell visited by making it a water cell

  // recursively visit all neighboring cells (horizontally & vertically)
  visit_island_DFS(matrix, x + 1, y); // lower cell
  visit_island_DFS(matrix, x - 1, y); // upper cell
  visit_island_DFS(matrix, x, y + 1); // right cell
  visit_island_DFS(matrix, x, y - 1); // left cell
}



console.log(
  count_islands_BFS([
    [
      ["1", "1", "1", "1", "0"],
      ["1", "1", "0", "1", "0"],
      ["1", "1", "0", "0", "0"],
      ["0", "0", "0", "0", "0"],
    ],
  ])
);

console.log(
  count_islands_DFS([
    [
      ["1", "1", "1", "1", "0"],
      ["1", "1", "0", "1", "0"],
      ["1", "1", "0", "0", "0"],
      ["0", "0", "0", "0", "0"],
    ],
  ])
);


// console.log(
//   count_islands_DFS([
//     [1, 1, 1, 0, 0],
//     [0, 1, 0, 0, 1],
//     [0, 0, 1, 1, 0],
//     [0, 0, 1, 0, 0],
//     [0, 0, 1, 0, 0],
//   ])
// );



var numIslands = function (grid) {
  let count = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] == "1") {
        count++;
        dfsSink(grid, i, j);
      }
    }
  }

  return count;
};

//if there are connected island sink them as connected island only count as one
const dfsSink = (grid, i, j) => {
  //if out of bound or encounter sea
  if (
    i == grid.length ||
    i < 0 ||
    j == grid[0].length ||
    j < 0 ||
    grid[i][j] == "0"
  ) {
    return;
  }
  if (grid[i][j] == "1") {
    grid[i][j] = "0";
    dfsSink(grid, i - 1, j);
    dfsSink(grid, i, j - 1);
    dfsSink(grid, i + 1, j);
    dfsSink(grid, i, j + 1);
  }
};


//BFS 
function count_islands_BFS(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  let totalIslands = 0;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (matrix[i][j] === 1) {
        // only if the cell is a land
        // we have found an island
        totalIslands++;
        visit_island_BFS(matrix, i, j);
      }
    }
  }
  return totalIslands;
}

function visit_island_BFS(matrix, x, y) {
  const neighbors = [[x, y]];
  while (neighbors.length > 0) {
    const cell = neighbors.shift();
    const row = cell[0];
    const col = cell[1];

    if (row < 0 || row >= matrix.length || col < 0 || col >= matrix[0].length)
      continue; // continue, if it is not a valid cell
    if (matrix[row][col] == 0) continue; // continue if it is a water cell

    matrix[row][col] = 0; // mark the cell visited by making it a water cell

    // insert all neighboring cells to the queue for BFS
    neighbors.push([row + 1, col]); // lower cell
    neighbors.push([row - 1, col]); // upper cell
    neighbors.push([row, col + 1]); // right cell
    neighbors.push([row, col - 1]); // left cell
  }
}

console.log(
  count_islands_BFS([
    [0, 1, 1, 1, 0],
    [0, 0, 0, 1, 1],
    [0, 1, 1, 1, 0],
    [0, 1, 1, 0, 0],
    [0, 0, 0, 0, 0],
  ])
);
console.log(
  count_islands_BFS([
    [1, 1, 1, 0, 0],
    [0, 1, 0, 0, 1],
    [0, 0, 1, 1, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
  ])
);