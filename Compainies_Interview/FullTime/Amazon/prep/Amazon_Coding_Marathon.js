// 2. Code Question 2
// In an Amazon coding marathon, the following challenge was given.
// The uniqueness of an array of integers is defined as the number of distinct elements present. 
//For example, the uniqueness of[1, 5, 2, 1, 3, 5] is 4, element values 1, 2, 3, and 5. For an array arr of n integers, 
// the uniqueness values of its subarrays is generated and stored in another array, call it subarray_uniqueness for discussion.
//Find the median of the generated array subarray_uniqueness.


// Notes
// 1. The median of a list is defined as the middle value of the list when it is sorted in non-decreasing order. If there are multiple choices for median, the smaller of the two values is taken. For example, the median of [1, 5, 8] is 5, and of [2, 3, 7, 11] is 3.
// 2. A subarray is a contiguous part of the array. For example, [1, 2, 3] is a subarray of [6, 1, 2, 3, 5] but [6, 2] is not.
// Example
// There are n = 3 elements in arr = [1, 2, 1]. The subarrays along with their uniqueness values are:
// • [1] : uniqueness = 1
// • [1, 2]: uniqueness = 2
// • [1, 2, 1] : uniqueness = 2
// • [2] : uniqueness = 1
// • [2, 1]: uniqueness = 2
// • [1] : uniqueness = 1
// The subarray_uniqueness array is [1, 2, 2, 1, 2, 1]. 
// After sorting, the array is[1, 1, 1, 2, 2, 2].The choice is between the two bold values.Return the minimum of the two, 1.


function distinct(arr) {
    let counts = [];

    for (let windowStart = 0; windowStart < arr.length; windowStart++) {
        let distinct = 0;
        let freqMap = new Map();
        
        for (let windowEnd = windowStart; windowEnd < arr.length; windowEnd++) {
            let endElement = arr[windowEnd];

            if (freqMap.has(endElement)) {
                freqMap.set(endElement, freqMap.get(endElement) + 1);
            } else {
                freqMap.set(endElement, 1);
                distinct++;
            }
        }

        counts.push(distinct);
    }

        counts.sort((a, b) => a - b);
    
        let mid = Math.floor(counts.length / 2);
        let median;
        if (counts.length % 2 === 0) {
          median = (counts[mid - 1] + counts[mid]) / 2;
        } else {
          median = counts[mid];
        }

        return Math.ceil(median);

}

let array = [1, 2, 3];
console.log(distinct(array));