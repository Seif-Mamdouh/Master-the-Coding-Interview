var minSum = function(nums1, nums2) {
    let sum1 = 0, sum2 = 0;
    let zeros1 = 0, zeros2 = 0;

    for (let num of nums1) {
        if (num === 0) {
            zeros1++;
        } else {
            sum1 += num;
        }
    }
    
    for (let num of nums2) {
        if (num === 0) {
            zeros2++;
        } else {
            sum2 += num;
        }
    }

    let combinedSum1 = sum1 + zeros1;
    let combinedSum2 = sum2 + zeros2;
    
    if(zeros1 === 0 && combinedSum1 < combinedSum2) return -1;
    if(zeros2 === 0 && combinedSum2 < combinedSum1) return -1;

    return Math.max(combinedSum1, combinedSum2);
};
