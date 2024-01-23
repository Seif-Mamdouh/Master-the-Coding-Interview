// given flights in
// EWR -> LHR -> NHR -> HRT -> SFO

// if I give you a list of data such as
// [ HRT -> SFO 
// LHR -> NHR
// NHR -> HRT
//  EWR -> LHR]

// return the start point, middle and end

// explain how you found the middle?

class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addEdge(source, destination) {
    if (!this.adjacencyList.has(source)) {
      this.adjacencyList.set(source, []);
    }
    this.adjacencyList.get(source).push(destination);
  }

  findStartMiddleEnd() {
    const inDegree = new Map();
    const outDegree = new Map();

    // Calculate in-degree and out-degree for each node
    for (const [source, destinations] of this.adjacencyList) {
      if (!inDegree.has(source)) {
        inDegree.set(source, 0);
      }
      outDegree.set(source, destinations.length);

      for (const destination of destinations) {
        if (!inDegree.has(destination)) {
          inDegree.set(destination, 1);
        } else {
          inDegree.set(destination, inDegree.get(destination) + 1);
        }

        if (!outDegree.has(destination)) {
          outDegree.set(destination, 0);
        }
      }
    }

    // Find start, middle, and end points
    let startPoint, middlePoint, endPoint;
    for (const node of inDegree.keys()) {
      if (inDegree.get(node) === 0 && outDegree.get(node) === 1) {
        startPoint = node;
      } else if (inDegree.get(node) === 1 && outDegree.get(node) === 1) {
        middlePoint = node;
      } else if (inDegree.get(node) === 1 && outDegree.get(node) === 0) {
        endPoint = node;
      }
    }

    return {
      startPoint,
      middlePoint,
      endPoint,
    };
  }
}

// Example data
const flightsData = [
  ["HRT", "SFO"],
  ["LHR", "NHR"],
  ["NHR", "HRT"],
  ["EWR", "LHR"],
];

// Create a graph and populate it with the example data
const graph = new Graph();
for (const [source, destination] of flightsData) {
  graph.addEdge(source, destination);
}

// Call the findStartMiddleEnd method
const result = graph.findStartMiddleEnd();

// Log the result
console.log("Start Point:", result.startPoint);
console.log("Middle Point:", result.middlePoint);
console.log("End Point:", result.endPoint);


// function findStartMiddleEnd(data) {
//   const flights = {};

//   // Create a dictionary to represent the flight data
//   for (const route of data) {
//     const [origin, destination] = route.split(" -> ");
//     flights[origin] = destination;
//   }

//   let startPoint = null;
//   let endPoint = null;
//   let middlePoint = null;

//   // Find the start and end points
//   for (const origin in flights) {
//     if (!Object.values(flights).includes(origin)) {
//       startPoint = origin;
//     }
//     if (!Object.keys(flights).includes(origin)) {
//       endPoint = origin;
//     }
//   }

//   // Find the middle point
//   for (const origin in flights) {
//     if (origin !== startPoint && origin !== endPoint) {
//       middlePoint = origin;
//       break;
//     }
//   }

//   return [startPoint, middlePoint, endPoint];
// }

// // Example data
// const data = ["HRT -> SFO", "LHR -> NHR", "NHR -> HRT", "EWR -> LHR"];
// const [start, middle, end] = findStartMiddleEnd(data);

// console.log("Start Point:", start);
// console.log("Middle Point:", middle);
// console.log("End Point:", end);

// // Start Point: EWR
// // Middle Point: HRT
// // End Point: SFO