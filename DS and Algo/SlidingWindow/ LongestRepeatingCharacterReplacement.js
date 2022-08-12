424. Longest Repeating Character Replacement
Medium
PSA: Akuna Capital asked this question

You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

Return the length of the longest substring containing the same letter you can get after performing the above operations.

 

Example 1:

Input: s = "ABAB", k = 2
Output: 4
Explanation: Replace the two 'A's with two 'B's or vice versa.
Example 2:

Input: s = "AABABBA", k = 1
Output: 4
Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
The substring "BBBB" has the longest repeating letters, which is 4.


//solution is uyet to be implemented

var characterReplacement = function(s, k) {
    
    let left = 0;
    let right = 0;
    let max = 0;
    let freqMap = {};
    let freqMax = 0;
    
    for(right = 0; right < s.length; right ++){
        
        freqMap[s[right]] = freqMap[s[right]] + 1 || 1;
        freqMax = Math.max(freqMap[s[right]], freqMax);
        console.log(freqMax);
        
        while(right - left + 1 - freqMax > k) {
            freqMap[s[left]] -= 1;
            left ++;
        }
        
        max = Math.max(right-left + 1, max);
    }
    
    return max;
    
};



var characterReplacement = function(s, k) {
    let [ left, right, longest, max ] = new Array(4).fill(0);
    const frequencyMap = new Array(26).fill(0);

    while (right < s.length) {
        const count = addRightFrequency(s, right, frequencyMap);
        
        longest = Math.max(longest, count);

        let window = (right - left) + 1;
        const canSlide = k < (window - longest);
        if (canSlide) {
            subtractLeftFrequency(s, left, frequencyMap);
            left++;
        }

        window = (right - left) + 1;
        max = Math.max(max, window);
        
        right++;
    }
    
    return max;
};

const addRightFrequency = (s, right, map) => {
    const char = s[right];
    const index = getCode(char);

    map[index]++;
    
    return map[index];
}

const subtractLeftFrequency = (s, left, map) => {
    const char = s[left];
    const index = getCode(char);

    map[index]--;
    
    return map[index];
}

const getCode = (char) => char.charCodeAt(0) - 'A'.charCodeAt(0);
