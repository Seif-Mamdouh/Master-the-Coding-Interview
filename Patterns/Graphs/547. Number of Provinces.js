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

var findCircleNum = function(isConnected) {
    
    const adjList = new Map();

    for (let i = 0; i < isConnected.length; i++) {
        adjList.set(i, []);
    }

    
    for (let i = 0; i < isConnected.length; i++) {
        for (let j = 0; j < isConnected[i].length; j++) {
            if (isConnected[i][j] === 1 && i !== j) {
                adjList.get(i).push(j);
                adjList.get(j).push(i); // Because it's an undirected graph
            }
        }
    }

    
    const visited = new Array(isConnected.length).fill(false);
    let count = 0;

    // stack version
    // for (let i = 0; i < isConnected.length; i++) {
    //     if (!visited[i]) {
    //         count++;
    //         const stack = [i];

    //         while (stack.length > 0) {
    //             const node = stack.pop();
    //             if (!visited[node]) {
    //                 visited[node] = true;
    //                 const neighbors = adjList.get(node);
    //                 for (let neighbor of neighbors) {
    //                     if (!visited[neighbor]) {
    //                         stack.push(neighbor);
    //                     }
    //                 }
    //             }
    //         }
    //     }
  // }
  
  // dfs version
    const dfs = (node) => {
      visited[node] = true;
      const neighbors = adjList.get(node);
      for (let neighbor of neighbors) {
        if (!visited[neighbor]) {
          dfs(neighbor);
        }
      }
  }

    return count;
};
