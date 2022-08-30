// 57. Insert Interval
// Medium


// Share
// You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the ith interval and intervals is sorted in ascending order by starti. You are also given an interval new_interval = [start, end] that represents the start and end of another interval.

// Insert new_interval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).

// Return intervals after the insertion.

 

// Example 1:

// Input: intervals = [[1,3],[6,9]], new_interval = [2,5]
// Output: [[1,5],[6,9]]
// Example 2:

// Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], new_interval = [4,8]
// Output: [[1,2],[3,10],[12,16]]
// Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].


/*

When inserting a new interval in a sorted list, we need to first find 
the correct index where the new interval can be placed.
In other words, we need to skip all the 
intervals which end before the start of the new interval.
So we can iterate through the given sorted listed of intervals 
and skip all the intervals with the following condition:

intervals[i].end < new_interval.start


Once we have found the correct place, we can follow an approach similar 
to Merge Intervals to insert and/or merge the new interval. 
Let’s call the new interval ‘a’ and the first interval with 
the above condition ‘b’. There are five possibilities.


Our overall algorithm will look like this:

Skip all intervals which end before the start of the new interval, i.e., 
skip all intervals with the following condition:

    intervals[i].end < new_interval.start

Let’s call the last interval ‘b’ that does not satisfy the above condition. 
If ‘b’ overlaps with the new interval (a) (i.e. b.start <= a.end), 
we need to merge them into a new interval ‘c’:

    c.start = min(a.start, b.start)
    c.end = max(a.end, b.end)

We will repeat the above two steps to merge ‘c’ with the next overlapping 
interval.

*/

class Interval {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }

    print_interval() {
        process.stdout.write(`[${this.start}, ${this.end}]`);
    }
}

function insert(intervals, new_interval) {
      let merged = [],
        i = 0;

      // skip and add to output) all intervals that come before the 'new_interval'
      while (i < intervals.length && intervals[i].end < new_interval.start) {
        merged.push(intervals[i]);
        i += 1;
      }

      // merge all intervals that overlap with 'new_interval'
      while (i < intervals.length && intervals[i].start <= new_interval.end) {
        new_interval.start = Math.min(intervals[i].start, new_interval.start);
        new_interval.end = Math.max(intervals[i].end, new_interval.end);
        i += 1;
      }

      // insert the new_interval
      merged.push(new_interval);

      // add all the remaining intervals to the output
      while (i < intervals.length) {
        merged.push(intervals[i]);
        i += 1;
      }

      return merged;
}



process.stdout.write("Intervals after inserting the new interval: ");
let result = insert(
  [new Interval(1, 3), new Interval(5, 7), new Interval(8, 12)],
  new Interval(4, 6)
);
for (i = 0; i < result.length; i++) {
  result[i].print_interval();
}
console.log();

process.stdout.write("Intervals after inserting the new interval: ");
result = insert(
  [new Interval(1, 3), new Interval(5, 7), new Interval(8, 12)],
  new Interval(4, 10)
);
for (i = 0; i < result.length; i++) {
  result[i].print_interval();
}
console.log();

process.stdout.write("Intervals after inserting the new interval: ");
result = insert([new Interval(2, 3), new Interval(5, 7)], new Interval(1, 4));
for (i = 0; i < result.length; i++) {
  result[i].print_interval();
}
console.log();
