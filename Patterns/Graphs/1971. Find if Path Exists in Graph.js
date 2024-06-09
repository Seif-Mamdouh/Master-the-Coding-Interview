var validPath = function (n, edges, source, destination) {
  const adjacencyList = new Array(n).fill().map(() => []);

  for (const [u, v] of edges) {
    adjacencyList[u].push(v);
    adjacencyList[v].push(u);
  }

  const visited = new Array(n).fill(false);

  const dfs = (node) => {
    visited[node] = true;

    if (node === destination) {
      return true;
    }

    for (const neighbor of adjacencyList[node]) {
      if (!visited[neighbor]) {
        if (dfs(neighbor)) {
          return true;
        }
      }
    }

    return false;
  };

  return dfs(source);
};
