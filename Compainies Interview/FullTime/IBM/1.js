/*
 * Complete the 'sameSubstring' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. STRING t
 *  3. INTEGER K
 */

// O(n) time
// O(1) space

function sameSubstring(s, t, K) {
    //get length of input string
    const n = s.length;
    // initialize pointers
    let left = 0,
        right = 0,
        maxLen = 0,
        currentCost = 0;

    //Traverse through the strings using the right pointer
    while (right < n) {
        //Update the current cost with the diff of characters
        currentCost += Math.abs(s.charCodeAt(right) - t.charCodeAt(right));

        //Adjust the left pointer while current cost is greater than K
        while (currentCost > K) {
            currentCost -= Math.abs(s.charCodeAt(left) - t.charCodeAt(left));
            left++;
        }

        //get the maxLength of all substrings
        maxLen = Math.max(maxLen, right - left + 1);

        //move the right to the next character
        right++;
    }

    return maxLen;
}
