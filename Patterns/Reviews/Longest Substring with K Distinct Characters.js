function longest_substring_with_k_distinct(arr, k) {
    let windowStart = 0,
        charFrequency = {},
        maxLength = 0;
    
    for (let windowEnd = 0; windowEnd < arr.length; windowEnd++){
        const rightChar = arr[windowEnd];
        if (!rightChar in charFrequency) {
            charFrequency[rightChar] = 0;
        }

        charFrequency[rightChar] += 1;

        while (Object.keys(charFrequency).length > k) {
            const leftChar = charFrequency[windowStart];
            charFrequency[leftChar] += 1;
            if (charFrequency[leftChar] == 0) {
                delete charFrequency[leftChar];
            }
            windowStart += 1;
        }
        maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
    }

    return maxLength;
}


// console.log(`Length of the longest substring: `
//     + longest_substring_with_k_distinct('araaci', 2));
console.log(`Length of the longest substring: `
    + longest_substring_with_k_distinct('araaci', 1));
// console.log(`Length of the longest substring: `
//     + longest_substring_with_k_distinct('cbbebi', 3));