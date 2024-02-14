var kthSmallest = function (matrix, k) {
  let left = matrix[0][0];
  let right = matrix[matrix.length - 1][matrix[0].length - 1];

  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    let count = countLessThan(matrix, mid);

    if (count < k) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return left;
};

function countLessThan(matrix, target) {
  let count = 0;
  let row = matrix.length - 1;
  let col = 0;

  while (row >= 0 && col < matrix[0].length) {
    if (matrix[row][col] <= target) {
      count += row + 1; // Count all elements in the current column
      col++;
    } else {
      row--;
    }
  }

  return count;
}

// O(NlogN)
// O(1)
var kthSmallest = function (matrix, k) {
  let left = matrix[0][0];
  let right = matrix[matrix.length - 1][matrix[0].length - 1];
  let N = matrix.length;

  function less_than_k(m) {
    let count = 0;
    for (let i = 0; i < N; i++) {
      let x = binarySearch(matrix[i], m);
      count += x;
    }

    return count;
  }

  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (less_than_k(mid) < k) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return left;
};

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid; // return mid itself
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return left;
}

//Brute Force
var kthSmallest = function (matrix, k) {
  let flattenedArray = [];

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      flattenedArray.push(matrix[i][j]);
    }
  }

  flattenedArray.sort((a, b) => a - b);

  return flattenedArray[k - 1];
};

//O(N^2)
//O(N)
