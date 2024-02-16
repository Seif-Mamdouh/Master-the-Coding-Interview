// V Day solution

var searchMatrix = function (matrix, target) {
  function binary_search(row, target) {
    let left = 0;
    let right = row.length - 1;

    while (left <= right) {
      let mid = Math.floor((left + right) / 2);

      if (row[mid] === target) {
        return true;
      } else if (row[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    return false;
  }

  let row = matrix.length;

  for (let i = 0; i < row; i++) {
    if (binary_search(matrix[i], target)) {
      return true;
    }
  }

  return false;
};



//Aug 2023 Solution
var searchMatrix = function (matrix, target) {
  function searchBinary(matrix, target, rowIndex) {
    let left = 0;
    let right = matrix[rowIndex].length - 1;

    while (left <= right) {
      let mid = Math.floor((left + right) / 2);

      if (matrix[rowIndex][mid] === target) {
        return true;
      } else if (matrix[rowIndex][mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    return false;
  }

  for (let row = 0; row < matrix.length; row++) {
    if (searchBinary(matrix, target, row)) {
      return true;
    }
  }

  return false;
};
