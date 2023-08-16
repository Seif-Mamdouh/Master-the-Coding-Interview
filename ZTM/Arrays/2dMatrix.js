const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const rows = matrix.length;
const columns = matrix[0].length;

// Row-wise traversal
console.log("Row-Wise Traversal:");
for (let row = 0; row < rows; row++) {
  for (let col = 0; col < columns; col++) {
    console.log(matrix[row][col]);
  }
}

// Column-wise traversal
console.log("Column-Wise Traversal:");
for (let col = 0; col < columns; col++) {
  for (let row = 0; row < rows; row++) {
    console.log(matrix[row][col]);
  }
}
