/*
463. Island Perimeter
Easy

4818

254

Add to List

Share
You are given row x col grid representing a map where grid[i][j] = 1 represents land and grid[i][j] = 0 represents water.

Grid cells are connected horizontally/vertically (not diagonally). The grid is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells).

The island doesn't have "lakes", meaning the water inside isn't connected to the water around the island. One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island.

 

Example 1:


Input: grid = [[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]
Output: 16
Explanation: The perimeter is the 16 yellow stripes in the image above.
Example 2:

Input: grid = [[1]]
Output: 4
Example 3:

Input: grid = [[1,0]]
Output: 4

*/


function islandPerimeter(matrix) {
    let rows = matrix.length;
    let cols = matrix[0].length;
    let visited = Array(rows).fill(false).map(() => Array(cols).fill(false));

     for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (matrix[i][j] === 1 && !visited[i][j])
        // only if the cell is a land and not visited
        return island_perimeter_DFS(matrix, visited, i, j);
    }
  }
  return 0;
}

function island_prem(matrix, visited, x, y) {
    if (x < 0 || x >= matrix.length || y < 0 || y >= matrix.length) {
        return 1;
    }

    if (matrix[x][y] == 0) {
        return 1;
    }

    if (visited[x][y]) {
        return 0;
    }

    visited[x][y] = true;

    let edgeCount = 0;

    edgeCount &= island_prem(matrix, visited, x + 1, y);
    edgeCount &= island_prem(matrix, visited, x - 1, y);
    edgeCount &= island_prem(matrix, visited, x, y + 1);
    edgeCount &= island_prem(matrix, visited, x, y - 1);


    return edgeCount;
    
}

console.log(
  islandPerimeter([
    [1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0],
    [0, 1, 0, 0, 0],
    [0, 1, 1, 0, 0],
    [0, 0, 0, 0, 0],
  ])
);

console.log(
  islandPerimeter([
    [0, 0, 0, 0],
    [0, 1, 0, 0],
    [0, 1, 0, 0],
    [0, 1, 1, 0],
    [0, 1, 0, 0],
  ])
);


function find_island_perimeter_DFS(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const visited = Array(rows)
    .fill(false)
    .map(() => Array(cols).fill(false));

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (matrix[i][j] === 1 && !visited[i][j])
        // only if the cell is a land and not visited
        return island_perimeter_DFS(matrix, visited, i, j);
    }
  }
  return 0;
}

function island_perimeter_DFS(matrix, visited, x, y) {
  if (x < 0 || x >= matrix.length || y < 0 || y >= matrix[0].length) return 1; // returning 1, since this a boundary cell initiated this DFS call
  if (matrix[x][y] == 0) return 1; // returning 1, because of the shared side b/w a water and a land cell

  if (visited[x][y]) return 0; // we have already taken care of this cell

  visited[x][y] = true; // mark the cell visited

  let edgeCount = 0;
  // recursively visit all neighboring cells (horizontally & vertically)
  edgeCount += island_perimeter_DFS(matrix, visited, x + 1, y); // lower cell
  edgeCount += island_perimeter_DFS(matrix, visited, x - 1, y); // upper cell
  edgeCount += island_perimeter_DFS(matrix, visited, x, y + 1); // right cell
  edgeCount += island_perimeter_DFS(matrix, visited, x, y - 1); // left cell

  return edgeCount;
}

console.log(
  find_island_perimeter_DFS([
    [1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0],
    [0, 1, 0, 0, 0],
    [0, 1, 1, 0, 0],
    [0, 0, 0, 0, 0],
  ])
);

console.log(
  find_island_perimeter_DFS([
    [0, 0, 0, 0],
    [0, 1, 0, 0],
    [0, 1, 0, 0],
    [0, 1, 1, 0],
    [0, 1, 0, 0],
  ])
);