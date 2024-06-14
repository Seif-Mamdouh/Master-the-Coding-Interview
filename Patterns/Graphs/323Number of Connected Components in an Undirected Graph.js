// Linkden Premuim
// You have a graph of n nodes. You are given an integer n and an array edges where edges[i] = [ai, bi] indicates that there is an edge between ai and bi in the graph.

// Return the number of connected components in the graph.

 

// Example 1:


// Input: n = 5, edges = [[0,1],[1,2],[3,4]]
// Output: 2
// Example 2:


// Input: n = 5, edges = [[0,1],[1,2],[2,3],[3,4]]
// Output: 1



var countComponents = function (n, edges) {

  const adjlst = new Array(n).fill().map(() => []);

  for (const [u, v] of edges) {
    adjlst[u].push(v);
    adjlst[v].push(u);
  }

    const visited = new Array(n).fill(false);
    let connectedComponents = 0;

    const dfs = (start) => {

        if(visited[start]) return;

        visited[start] = true;

        for(let neigh of adjlst[start]){
            dfs(neigh);
        }
    };


    for(let i = 0; i < n; i++){
        if(!visited[i]){
            dfs(i);
            connectedComponents++; 
        }
    }

    return connectedComponents;

};
