var sortedSquares = function(nums) {

    let n = nums.length;
    let sqaures = Array(n).fill(0); 
    let highestSqaureIndex = n - 1;
    let right = n-1;
    let left = 0;

    while (left <= right){
        let rightSqaure = nums[right] * nums[right];
        let leftSqaure = nums[left] * nums[left];

        if(leftSqaure > rightSqaure){
            sqaures[highestSqaureIndex] = leftSqaure;
            left += 1
        } else {
            sqaures[highestSqaureIndex] = rightSqaure;
            right -= 1;
        }

        highestSqaureIndex -= 1;
    }

    return sqaures;
};