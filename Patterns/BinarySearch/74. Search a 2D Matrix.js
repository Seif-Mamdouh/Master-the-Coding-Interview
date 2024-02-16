//O(log(n*m))
var searchMatrix = function (matrix, target) {
  if (matrix.length === 0 || matrix[0].length === 0) {
    return false;
  }

  const rows = matrix.length;
  const cols = matrix[0].length;
  let left = 0;
  let right = rows * cols - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const midElement = matrix[Math.floor(mid / cols)][mid % cols];

    if (midElement === target) {
      return true;
    } else if (midElement < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return false;
};



// V Day solution Feb 14th , 2024
// O(NlogN)
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
