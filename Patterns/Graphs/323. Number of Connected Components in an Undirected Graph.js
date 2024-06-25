// // 323. Number of Connected Components in an Undirected Graph

// You have a graph of n nodes. You are given an integer n and an array edges where edges[i] = [ai, bi] indicates that there is an edge between ai and bi in the graph.

// Return the number of connected components in the graph.
// Input: n = 5, edges = [[0,1],[1,2],[3,4]]
// Output: 2
// Example 2:


// Input: n = 5, edges = [[0,1],[1,2],[2,3],[3,4]]
// Output: 1

const countComponents = (n, edges) => {
  const adjList = new Array(n).fill().map(() => []);

  for (const [u, v] of edges) {
    adjList[u].push(v);
    adjList[v].push(u);
  }

  const visited = new Array(n).fill(false);
  let componentCount = 0;

  const bfs = (start) => {
    const queue = [start];
    while (queue.length > 0) {
      const node = queue.shift();
      if (!visited[node]) {
        visited[node] = true;
        for (const neighbor of adjList[node]) {
          if (!visited[neighbor]) {
            queue.push(neighbor);
          }
        }
      }
    }
  };

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      bfs(i);
      componentCount++;
    }
  }

  return componentCount;
};
