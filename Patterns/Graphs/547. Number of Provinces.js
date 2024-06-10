var findCircleNum = function (isConnected) {
  let visted = new Array(isConnected.length).fill(false);

  let count = 0;

  for (let i = 0; i < isConnected.length; i++) {
    if (!visted[i]) {
      let stack = [i];

      while (stack.length > 0) {
        let node = stack.pop();
        if (!visted[node]) {
          visted[node] = true;

          for (let neighbor = 0; neighbor < isConnected.length; neighbor++) {
            if (isConnected[node][neighbor] === 1 && !visted[neighbor]) {
              stack.push(neighbor);
            }
          }
        }
      }
      count++;
    }
  }

  return count;
};
