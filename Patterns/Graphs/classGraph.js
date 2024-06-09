class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, []);
      console.log(`Added vertex: ${vertex}`);
    } else {
      console.log(`Vertex ${vertex} already exists.`);
    }
  }

  removeVertex(vertex) {
    if (this.adjacencyList.has(vertex)) {
      this.adjacencyList.delete(vertex);

      for (let neighbors of this.adjacencyList.values()) {
        let index = neighbors.indexOf(vertex);
        if (index !== -1) {
          neighbors.splice(index, 1);
        }
      }
      console.log(`${vertex} is removed`);
    } else {
      console.log(`${vertex} not found`);
    }
  }

  addEdge(vertex1, vertex2) {
    this.adjacencyList.get(vertex1).push(vertex2);
    this.adjacencyList.get(vertex2).push(vertex1);
  }

  removeEdge(vertex1, vertex2) {
    let neigh1 = this.adjacencyList.get(vertex1);

    let index1 = this.adjacencyList.get(neigh1);
    if (index1 !== -1) {
      neigh1.splice(index1, 1);
    }
      
      
    let neigh2 = this.adjacencyList.get(vertex2);
    let index2 = neigh2.indexOf(vertex1);
    if (index2 !== -1) {
      neigh2.splice(index2, 1);
    }
  }

  getVertices() {
    return Array.from(this.adjacencyList.keys());
  }

  isAdjacent(vertex1, vertex2) {
    let num1 = this.adjacencyList.get(vertex1);

    if (num1.includes(vertex2)) {
      console.log(`Yes, ${vertex1} has ${vertex2}`);
    } else {
      console.log(`No, ${vertex1} does not have ${vertex2}`);
    }
  }

  getVertexCount() {
    // Implement the function to get the total number of vertices.
    let vertcies = Array.from(this.adjacencyList.keys());
    console.log(vertcies.length);
  }

  getEdgeCount() {
    let count = 0;
    for (const neighbors of this.adjacencyList.values()) {
      count += neighbors.length;
    }
    return count / 2; // Divided by 2 because each edge is counted twice.
  }

  getEdges() {
     const edges = new Set();
     for (const [vertex1, neighbors] of this.adjacencyList.entries()) {
       for (const vertex2 of neighbors) {
         const edge =
           vertex1 < vertex2
             ? `${vertex1},${vertex2}`
             : `${vertex2},${vertex1}`;
         edges.add(edge);
       }
     }
     const edgesArray = Array.from(edges).map((edge) =>
       edge.split(",").map(Number)
     );
     console.log(
       `All the edges are ${edgesArray.map((e) => e.join(",")).join(", ")}`
     );
     return edgesArray;
  }

  getNeighbors(vertex) {
    // Implement the function to get an array of neighbors of a given vertex.
    let neighbors = this.adjacencyList.get(vertex)
      ? this.adjacencyList.get(vertex)
      : [];
    console.log(`neighbors for vertex ${vertex} are ${neighbors}`);
  }

  printMap() {
    console.log(this.adjacencyList);
  }
}

const graph = new Graph();

graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);
graph.addVertex(4);
graph.addVertex(5);


graph.addEdge(1, 2);
graph.addEdge(2, 3);
graph.addEdge(3, 4);
graph.addEdge(4, 5);


graph.isAdjacent(1, 2);

graph.isAdjacent(2, 2);


graph.getVertexCount();

graph.getNeighbors(1)

graph.getEdges();
