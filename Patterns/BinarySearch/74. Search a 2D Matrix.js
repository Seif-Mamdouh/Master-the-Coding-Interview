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
