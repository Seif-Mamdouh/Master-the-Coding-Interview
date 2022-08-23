/*
1254. Number of Closed Islands
Medium

Given a 2D grid consists of 0s (land) and 1s (water).  An island is a maximal 4-directionally 
connected group of 0s and a closed island is an island totally (all left, top, right, bottom) 
surrounded by 1s.

Return the number of closed islands.

 

Example 1:

Input: grid = [[1,1,1,1,1,1,1,0],[1,0,0,0,0,1,1,0],[1,0,1,0,1,1,1,0],[1,0,0,0,0,1,0,1],[1,1,1,1,1,1,1,0]]
Output: 2
Explanation: 
Islands in gray are closed because they are completely surrounded by water (group of 1s).
Example 2:



Input: grid = [[0,0,1,0,0],[0,1,0,1,0],[0,1,1,1,0]]
Output: 1
Example 3:

Input: grid = [[1,1,1,1,1,1,1],
               [1,0,0,0,0,0,1],
               [1,0,1,1,1,0,1],
               [1,0,1,0,1,0,1],
               [1,0,1,1,1,0,1],
               [1,0,0,0,0,0,1],
               [1,1,1,1,1,1,1]]
Output: 2

*/

/*

The question follows the Island pattern and is quite similar to Number of Islands problem.

We will traverse the matrix linearly to find islands. We can use the Depth First Search (DFS) or Breadth First Search (BFS) to traverse an island i.e., to find all of its connected land cells.

How do we decide if an island is a closed island?

To find that out, while traversing an island we need to ensure two things: 
The island does not touch an edge.
Outside boundary of the island are water cells.

For the first condition, whenever we go outside the boundary of the matrix during DFS or BFS, it means that one of the cells of the island is touching an edge; so, the island is not closed. Following code will cover this condition:


  if (x < 0 || x >= matrix.length || y < 0 || y >= matrix[0].length)
     return false; // returning false since the island is touching an edge


For the second condition, we need to ensure that all the boundary cells of the island are water. Following code will take care of that: 


  if (matrix[x][y] == 0 || visted[x][y])
     return true; // returning true as the island is surrounded by water



*/

function noOfClosedIslands(matrix) {
  let rows = matrix.length;
  let cols = matrix[0].length;
  let visted = Array(rows)
    .fill(false)
    .map(() => Array(cols).fill(false));
  let closedIslands = 0;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (matrix[i][j] === 1 && !visted[i][j]) {
        if (is_closed_island_DFS(matrix, visted, i, j)) {
          closedIslands++;
        }
      }
    }
  }
  return closedIslands;
}

function is_closed_island_DFS(matrix, visted, x, y) {
  if (x < 0 || x >= matrix.length || y < 0 || y >= matrix[0].length)
    return false; // returning false since the island is touching an edge

  if (matrix[x][y] == 0 || visted[x][y]) return true; // returning true as the island is surrounded by water

  visted[x][y] = true; // mark the cell visted by making it a water cell

  let isClosed = true; // counting the current cell
  // recursively visit all neighboring cells (horizontally & vertically)
  isClosed &= is_closed_island_DFS(matrix, visted, x + 1, y); // lower cell
  isClosed &= is_closed_island_DFS(matrix, visted, x - 1, y); // upper cell
  isClosed &= is_closed_island_DFS(matrix, visted, x, y + 1); // right cell
  isClosed &= is_closed_island_DFS(matrix, visted, x, y - 1); // left cell

  return isClosed;
}

console.log(
  noOfClosedIslands([
    [1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0],
    [0, 0, 1, 1, 0],
    [0, 1, 1, 0, 0],
    [0, 0, 0, 0, 0],
  ])
);

console.log(
  noOfClosedIslands([
    [1, 1, 1, 1, 1, 1, 1, 0],
    [1, 0, 0, 0, 0, 1, 1, 0],
    [1, 0, 1, 0, 1, 1, 1, 0],
    [1, 0, 0, 0, 0, 1, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 0],
  ])
);

console.log(
  noOfClosedIslands([
    [0, 0, 0, 0],
    [0, 1, 0, 0],
    [0, 1, 0, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 0],
  ])
);


