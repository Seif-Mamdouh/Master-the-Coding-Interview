/*
986. Interval List Intersections
Medium


You are given two lists of closed intervals, firstList and secondList, 
where firstList[i] = [starti, endi] and secondList[j] = [startj, endj].
Each list of intervals is pairwise disjoint and in sorted order.

Return the intersection of these two interval lists.
A closed interval [a, b] (with a <= b) denotes the set of real 
numbers x with a <= x <= b.

The intersection of two closed intervals is a set of real numbers 
that are either empty or represented as a closed interval. 
For example, the intersection of [1, 3] and [2, 4] is [2, 3].

Example 1:

Input: firstList = [[0,2],[5,10],[13,23],[24,25]], 
secondList = [[1,5],[8,12],[15,24],[25,26]]

Output: [[1,2],[5,5],[8,10],[15,23],[24,24],[25,25]]
Example 2:

Input: firstList = [[1,3],[5,9]], secondList = []
Output: []

*/

//answer


/*

A close observation will tell us that whenever the two 
intervals overlap, one of the interval’s start time lies within the 
other interval. 
This rule can help us identify if any two intervals overlap or not.




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

function merge(intervals_a, intervals_b) {
  let result = [],
    i = 0,
    j = 0;

  while (i < intervals_a.length && j < intervals_b.length) {
    // check if intervals overlap and intervals_a[i]'s start time lies within the
    // other intervals_b[j]
    a_overlaps_b =
      intervals_a[i].start >= intervals_b[j].start &&
      intervals_a[i].start <= intervals_b[j].end;

    // check if intervals overlap and intervals_b[j]'s start time lies within the
    // other intervals_a[i]
    b_overlaps_a =
      intervals_b[j].start >= intervals_a[i].start &&
      intervals_b[j].start <= intervals_a[i].end;

    // store the the intersection part
    if (a_overlaps_b || b_overlaps_a) {
      result.push(
        new Interval(
          Math.max(intervals_a[i].start, intervals_b[j].start),
          Math.min(intervals_a[i].end, intervals_b[j].end)
        )
      );
    }
    // move next from the interval which is finishing first
    if (intervals_a[i].end < intervals_b[j].end) {
      i += 1;
    } else {
      j += 1;
    }
  }

  return result;
}

process.stdout.write("Intervals Intersection: ");
let result = merge(
  [new Interval(1, 3), new Interval(5, 6), new Interval(7, 9)],
  [new Interval(2, 3), new Interval(5, 7)]
);
for (i = 0; i < result.length; i++) {
  result[i].print_interval();
}
console.log();

process.stdout.write("Intervals Intersection: ");
result = merge(
  [new Interval(1, 3), new Interval(5, 7), new Interval(9, 12)],
  [new Interval(5, 10)]
);
for (i = 0; i < result.length; i++) {
  result[i].print_interval();
}
console.log();