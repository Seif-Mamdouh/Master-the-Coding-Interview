//Q1

//first approach
function inplaceSort(arr) {
  const n = arr.length;
  let swapped;

  do {
    swapped = false;
    for (let i = 0; i < n - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        // Swap elements if they are in the wrong order
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }
  } while (swapped);
}

// Function to count pairs with a target difference
function countPairs(projectCosts, target) {
  // Call inplaceSort to sort the array in-place
  inplaceSort(projectCosts);

  let left = 0;
  let right = 1;
  let counter = 0;

  while (right < projectCosts.length) {
    let diff = projectCosts[right] - projectCosts[left];

    if (diff === target) {
      counter++;
      left++;
      right++;
    } else if (diff > target) {
      left++;
      if (left === right) {
        right++;
      }
    } else {
      right++;
    }
  }

  return counter;
}

// Example usage:
const projectCosts = [1, 5, 3, 4, 2];
const target = 2;

countPairs(projectCosts, target);


//better approach
function countPairs(projectCosts, target) {
  //var to store count
  let count = 0;

  //set to have distinct elements
  const projectSet = new Set();

  for (let cost of projectCosts) {
    //if the
    if (projectSet.has(cost + target)) {
      count++;
    }
    if (projectSet.has(cost - target)) {
      count++;
    }
    projectSet.add(cost);
  }

  return count;
}




///////////////////////////////////////////////


//Q2
function doesCircleExist(commands) {
  const result = [];

  for (let command of commands) {
    if (isRobotInCircle(command)) {
      result.push("YES");
    } else {
      result.push("NO");
    }
  }
  return result;
}

function isRobotInCircle(command) {
  let x = 0;
  let y = 0;
  let dx = 0;
  let dy = 1;

  for (let i = 0; i < command.length; i++) {
    const move = command[i];

    if (move === "G") {
      x += dx;
      y += dy;
    } else if (move === "L") {
      [dx, dy] = [-dy, dx]; //Turn Left
    } else if (move === "R") {
      [dx, dy] = [dy, -dx]; //Turn Right
    }
  }

  return (x === 0 && y === 0) || dx !== 0 || dy !== 1;
}
