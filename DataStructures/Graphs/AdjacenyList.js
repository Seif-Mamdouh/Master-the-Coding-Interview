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
    this.adjanceyList.get(node2).push(node1);
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
