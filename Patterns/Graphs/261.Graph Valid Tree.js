var validTree = function (n, edges) {
  let adjlist = new Array(n).fill().map(() => []);

  for (let [to, from] of edges) {
    adjlist[to].push(from);
    adjlist[from].push(to);
  }

  let visited = new Array(n).fill(false);

  const bfs = (start) => {
    let queue = [start];
    let parent = new Array(n).fill(-1);

    while (queue.length > 0) {
      const node = queue.shift();

      if (!visited[node]) {
        visited[node] = true;

        for (let neigh of adjlist[node]) {
          if (!visited[neigh]) {
            queue.push(neigh);
            parent[neigh] = node;
          } else if (neigh !== parent[node]) {
            return true;
          }
        }
      }
    }
    return false;
  };

  if (bfs(0)) {
    return false;
  }

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      return false;
    }
  }

  return true;
};
