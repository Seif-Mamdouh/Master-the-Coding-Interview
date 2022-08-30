/*
253. Meeting Rooms II
Medium


Add to List

Share
Given an array of meeting time intervals intervals where intervals[i] = [starti, endi], return the minimum number of conference rooms required.

 

Example 1:

Input: intervals = [[0,30],[5,10],[15,20]]
Output: 2
Example 2:

Input: intervals = [[7,10],[2,4]]
Output: 1

*/




/*
Sort all the meetings on their start time.

Create a min - heap to store all the active meetings. 
This min - heap will also be used to find the active meeting
with the smallest end time.

Iterate through all the meetings one by one to add them in the min - heap.
    Let’s say we are trying to schedule the meeting m1.

Since the min - heap contains all the active meetings,
    so before scheduling m1 we can remove all meetings from the 
heap that have ended before m1, i.e.,
    remove all meetings from the heap that have 
    an end time smaller than or equal to the start time of m1.

Now add m1 to the heap.
The heap will always have all the overlapping meetings,
    so we will need rooms for all of them.
    Keep a counter to remember the maximum size 
    of the heap at any time which will be the 
    minimum number of rooms needed.
*/

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

