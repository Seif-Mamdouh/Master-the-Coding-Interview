function areAlmostEquivalent(s, t) {
    //Initialize a empty Array to return the Result
    const result = [];
    
    //loop through each pair of the strings;
    for (let i = 0; i < s.length; i++) {
        const sStr = s[i]; //first string in the pair
        const tStr = t[i]; //Get the second string in the pair
        
        //Edge case: if the length of both pairs are not the same, they can't be almost Equal
        if (sStr.length !== tStr.length) {
            result.push('NO');
            continue;
        }
        
        //create an array to count the the occurnces of  each letter in sStr and tStr (26 letter in the Alphabet)
        const sCount = new Array(26).fill(0);
        const tCount = new Array(26).fill(0);
        
        // Count the occurrences of each letter in sStr and tStr
        for (let j = 0; j < sStr.length; j++) {
            sCount[sStr.charCodeAt(j) - 'a'.charCodeAt(0)]++; //increasing the count for the letters
            tCount[tStr.charCodeAt(j) - 'a'.charCodeAt(0)]++;
        }
        
        let isAlmostEquivalent = true; //Assume the strings are almost equal until proven otherwise
        
        //Compare count of each letter in sStr and tStr
        for (let j = 0; j < 26; j++) {
            if (Math.abs(sCount[j] - tCount[j]) > 3) {
                isAlmostEquivalent = false; //If count exceeds 3, return False
                break;
            }
        }
        
        //Add yes or based whether the strings are equal or not
        result.push(isAlmostEquivalent ? 'YES' : 'NO');
    }
    
    //return the array of results
    return result;
}

// JP Morgan Chase & Co.NAMR TC - Campus Hiring - 2024 Batch



