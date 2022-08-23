/*
733. Flood Fill
Easy

5190

508

Add to List

Share
An image is represented by an m x n integer grid image where image[i][j] represents the pixel value of the image.

You are also given three integers sr, sc, and color. You should perform a flood fill on the image starting from the pixel image[sr][sc].

To perform a flood fill, consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same color as the starting pixel, plus any pixels connected 4-directionally to those pixels (also with the same color), and so on. Replace the color of all of the aforementioned pixels with color.

Return the modified image after performing the flood fill.

 

Example 1:


Input: image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, color = 2
Output: [[2,2,2],[2,2,0],[2,0,1]]
Explanation: From the center of the image with position (sr, sc) = (1, 1) (i.e., the red pixel), all pixels connected by a path of the same color as the starting pixel (i.e., the blue pixels) are colored with the new color.
Note the bottom corner is not colored 2, because it is not 4-directionally connected to the starting pixel.
Example 2:

Input: image = [[0,0,0],[0,0,0]], sr = 0, sc = 0, color = 0
Output: [[0,0,0],[0,0,0]]
Explanation: The starting pixel is already colored 0, so no changes are made to the image.

*/

function floorFill(matrix, x, y, newColor){
    if (matrix[x][y] !== newColor) {
        fill_DFS(matrix, x, y, matrix[x][y], newColor);
    }
    return matrix;
}

function fill_DFS(matrix, x, y, newColor, oldColor) {
  if (x < 0 || x >= matrix.length || y < 0 || y >= matrix.length) return;
  if (matrix[x][y] !== oldColor) return;

  matrix[x][y] = newColor;
  // recursively visit all neighboring cells (horizontally & vertically)
  fill_DFS(matrix, x + 1, y, oldColor, newColor); // lower cell
  fill_DFS(matrix, x - 1, y, oldColor, newColor); // upper cell
  fill_DFS(matrix, x, y + 1, oldColor, newColor); // right cell
  fill_DFS(matrix, x, y - 1, oldColor, newColor); // left cell
}

console.log(
  floorFill(
    [
      [0, 1, 1, 1, 0],
      [0, 0, 0, 1, 1],
      [0, 1, 1, 1, 0],
      [0, 1, 1, 0, 0],
      [0, 0, 0, 0, 0],
    ],
    1,
    3,
    2
  )
);

console.log(
  floorFill(
    [
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 1, 1, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 1, 0, 0],
    ],
    3,
    2,
    5
  )
);