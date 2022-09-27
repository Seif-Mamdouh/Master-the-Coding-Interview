

function find_averages_of_subarrays(k, arr) {
  const result = [];

  let windowSum = 0;
  let windowStart = 0; //

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
      windowSum += arr[windowEnd]; //add the next element
    if (windowEnd >= k - 1) {
        result.push(windowSum / k);
        windowSum -= arr[windowStart];
      windowStart += 1;
    //   console.log(arr[windowStart]);
    }
  }
  return result;
}


const result = find_averages_of_subarrays(5, [1, 3, 2, 6, -1, 4, 1, 8, 2]);
console.log(`Averages of subarrays of size K: ${result}`);