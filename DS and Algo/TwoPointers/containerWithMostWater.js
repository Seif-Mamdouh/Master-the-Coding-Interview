// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.

// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
// Example 2:

// Input: height = [1,1]
// Output: 1

var maxArea = function (height) {
  let i = 0;
  let j = height.length - 1;
  let max = 0;
  let area;

  while (i < j) {
    area = (j - i) * Math.min(height[i], height[j]);

      max = Math.max(area, max);
      
    //if left wall is lower than right wall, select a new left wall; otherwise select a new right wall …
    //   Then we keep looping until i meets j in the middle.
    height[i] < height[j] ? i++ : j--;
  }

  return max;
};


Let’s say we have an initial input, height = [1,8,6,2,5,4,8,3,7]

In our first loop, i = 0, j = 8(remember, these are indexes, not values).

The wall at height[i] is 1 unit high. The wall at height[j] is 7.

The width is j — i => 8 — 0 = 8.

Area = height of lower wall * width => 1 x 8 = 8.

We compare that to our max, which has an initial value of 0. Since area is greater than max, we set max equal to 8.



https://javascript.plainenglish.io/algorithms-101-container-with-most-water-in-javascript-8843a962ee0f