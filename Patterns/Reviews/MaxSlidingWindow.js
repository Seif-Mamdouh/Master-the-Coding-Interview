function max_sub_array_of_size_k(k, arr) {
    let maxSum = 0;
    let windowSum = 0;
    let windowStart = 0;

    for (let windowEnd = 0; windowEnd < arr.length; windowEnd++){
        windowSum += arr[windowEnd];

        if (windowEnd >= k - 1) {
            maxSum = Math.max(maxSum, windowSum);
            windowSum -= arr[windowStart];
            windowStart += 1;
        }
    }

    return maxSum;
}


console.log(
  `Maximum sum of a subarray of size K: ` +
    max_sub_array_of_size_k(3, [2, 1, 5, 1, 3, 2])
);
// console.log(
//   `Maximum sum of a subarray of size K: ` +
//     max_sub_array_of_size_k(2, [2, 3, 4, 1, 5])
// );
