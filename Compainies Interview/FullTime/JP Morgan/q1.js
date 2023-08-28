function funWithAnagrams(text) {
    const uniqueStrings = new Set();
    const result = [];

    for (const str of text) {
        const sortedStr = str.split('').sort().join('');
        if (!uniqueStrings.has(sortedStr)) {
            uniqueStrings.add(sortedStr);
            result.push(str);
        }
    }

    return result.sort();


// Testcase

// code
// aaagmnrs
// anagrams
// doce
// Your Output (stdout)
// aaagmnrs
// code
// Expected Output

// Download
// aaagmnrs
// code