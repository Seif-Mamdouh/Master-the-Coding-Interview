class Graph {
  adjanceyList = {};

  constructor() {
    this.adjanceyList = new Map();
  }

  // add node
  addNode(node) {
    this.adjanceyList.set(node, []);
  }

  //addEdge
  addEdge(node1, node2) {
    this.adjanceyList.get(node1).push(node2);
    // this.adjanceyList.get(node2).push(node1);
  }

  //has edge
  hasEdge(node1, node2) {
    return this.adjanceyList.get(node1).includes(node2);
  }

  //get neighbors
  getNeighbors(node) {
    return this.adjanceyList.get(node);
  }
}

const graph = new Graph();

graph.addNode(1);
graph.addNode(2);
graph.addNode(3);
graph.addNode(4);
graph.addNode(5);
graph.addNode(6);

graph.addEdge(1, 2);
graph.addEdge(1, 3);
graph.addEdge(2, 4);
graph.addEdge(3, 5);
graph.addEdge(4, 6);
graph.addEdge(5, 6);


function printGraph(graph) {
  // for (let [key, value] of graph.adjanceyList) {
  //   console.log(key, value);
  // }

  for (let [node, neighbors] of graph.adjanceyList) {
    console.log("adjancey list " + JSON.stringify(neighbors))
    console.log(node, "=>", neighbors.join(", "));
  }
}

printGraph(graph);


// Output


// Undirected Graph
// adjancey list [2,3]
// 1 => 2, 3
// adjancey list [1,4]
// 2 => 1, 4
// adjancey list [1,5]
// 3 => 1, 5
// adjancey list [2,6]
// 4 => 2, 6
// adjancey list [3,6]
// 5 => 3, 6
// adjancey list [4,5]
// 6 => 4, 5



// Directed Graph
// adjancey list [2,3]
// 1 => 2, 3
// adjancey list [4]
// 2 => 4
// adjancey list [5]
// 3 => 5
// adjancey list [6]
// 4 => 6
// adjancey list [6]
// 5 => 6
// adjancey list []
// 6 => 
