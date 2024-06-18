// # Graph BFS:
//   # Create a graph if needed.
//   # Initialize a queue with starting node, and initialize a visited set.
//   # Initialize anything else necessary for the solution.

//   # While queue is not empty:
//     # Pop off a node from the queue and mark it as visited.
//     # Do whatever you need with the node.
//     # Add unvisited neighboring nodes to the queue. 

//   # (Note) Finished traversing through graph.

// # Time Complexity: O(n)
// # Space Complexity: O(n)

var validTree = function(n, edges) {
    if (n === 0) return false;
    if (edges.length !== n - 1) return false; // A valid tree must have exactly n-1 edges

    let adjlist = new Array(n).fill().map(() => []);

    for (let [to, from] of edges) {
        adjlist[to].push(from);
        adjlist[from].push(to);
    }

    let queue = [0];
    let visited = new Set();
    visited.add(0);

    while (queue.length > 0) {
        let node = queue.shift();

        for (let neigh of adjlist[node]) {
            if (visited.has(neigh)) continue;
            visited.add(neigh);
            queue.push(neigh);
        }
    }

    return visited.size === n;
};




