// given flights in
// EWR -> LHR -> NHR -> HRT -> SFO

// if I give you a list of data such as
// [ HRT -> SFO 
// LHR -> NHR
// NHR -> HRT
//  EWR -> LHR]

// return the start point, middle and end

// explain how you found the middle?

function findStartMiddleEnd(data) {
  const flights = {};

  // Create a dictionary to represent the flight data
  for (const route of data) {
    const [origin, destination] = route.split(" -> ");
    flights[origin] = destination;
  }

  let startPoint = null;
  let endPoint = null;
  let middlePoint = null;

  // Find the start and end points
  for (const origin in flights) {
    if (!Object.values(flights).includes(origin)) {
      startPoint = origin;
    }
    if (!Object.keys(flights).includes(origin)) {
      endPoint = origin;
    }
  }

  // Find the middle point
  for (const origin in flights) {
    if (origin !== startPoint && origin !== endPoint) {
      middlePoint = origin;
      break;
    }
  }

  return [startPoint, middlePoint, endPoint];
}

// Example data
const data = ["HRT -> SFO", "LHR -> NHR", "NHR -> HRT", "EWR -> LHR"];
const [start, middle, end] = findStartMiddleEnd(data);

console.log("Start Point:", start);
console.log("Middle Point:", middle);
console.log("End Point:", end);

// Start Point: EWR
// Middle Point: HRT
// End Point: SFO