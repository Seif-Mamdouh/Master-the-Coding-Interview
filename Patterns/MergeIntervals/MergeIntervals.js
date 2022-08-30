class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  print_interval() {
    process.stdout.write(`[${this.start}, ${this.end}]`);
  }
}

function merge(intervals) {
    if (intervals.length < 2) {
        return intervals;
    }

    //sort the intervals on the start time 
    intervals.sort((a, b) => a.start - b.start);
    
    const mergedIntervals = [];
    let start = intervals[0].start,
        end = intervals[0].end;
    for (let i = 1; i < intervals.length; i++) {
        const interval = intervals[i];
        if (interval.start <= end) {
            //overlapping intervals, adjust the 'end'
            end = Math.max(interval.end, end);
        } else {
          // non-overlapping interval, add the previous interval and reset
            mergedIntervals.push(new Interval(start, end));
            start = interval.start;
            end = interval.end;
        }
    }
    //add the last interval 
    mergedIntervals.push(new Interval(start, end));
    return mergedIntervals;
}

process.stdout.write("Merged intervals: ");
let result = merge([
  new Interval(1, 4),
  new Interval(2, 5),
  new Interval(7, 9),
]);
for (i = 0; i < result.length; i++) {
  result[i].print_interval();
}
console.log();

process.stdout.write("Merged intervals: ");
result = merge([new Interval(6, 7), new Interval(2, 4), new Interval(5, 9)]);
for (i = 0; i < result.length; i++) {
  result[i].print_interval();
}
console.log();

process.stdout.write("Merged intervals: ");
result = merge([new Interval(1, 4), new Interval(2, 6), new Interval(3, 5)]);
for (i = 0; i < result.length; i++) {
  result[i].print_interval();
}
console.log();



const Heap = require("./collections/heap"); //http://www.collectionsjs.com

class Meeting {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }
}

function min_meeting_rooms(meetings) {
  // sort the meetings by start time
  meetings.sort((a, b) => a.start - b.start);

  let minRooms = 0,
    minHeap = new Heap([], null, (a, b) => b.end - a.end);
  for (i = 0; i < meetings.length; i++) {
    // remove all the meetings that have ended
    while (minHeap.length > 0 && meetings[i].start >= minHeap.peek().end) {
      minHeap.pop();
    }
    // add the current meeting into min_heap
    minHeap.push(meetings[i]);
    // all active meetings are in the min_heap, so we need rooms for all of them.
    minRooms = Math.max(minRooms, minHeap.length);
  }
  return minRooms;
}

console.log(
  `Minimum meeting rooms required: ` +
    `${min_meeting_rooms([
      new Meeting(1, 4),
      new Meeting(2, 5),
      new Meeting(7, 9),
    ])}`
);
console.log(
  `Minimum meeting rooms required: ` +
    `${min_meeting_rooms([
      new Meeting(6, 7),
      new Meeting(2, 4),
      new Meeting(8, 12),
    ])}`
);
console.log(
  `Minimum meeting rooms required: ` +
    `${min_meeting_rooms([
      new Meeting(1, 4),
      new Meeting(2, 3),
      new Meeting(3, 6),
    ])}`
);
console.log(
  `Minimum meeting rooms required: ` +
    `${min_meeting_rooms([
      new Meeting(4, 5),
      new Meeting(2, 3),
      new Meeting(2, 4),
      new Meeting(3, 5),
    ])}`
);
