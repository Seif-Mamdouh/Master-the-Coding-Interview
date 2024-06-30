// O(n) all time
var rotate = function (nums, k) {

    k = k % nums.length;

    reverse(nums, 0, nums.length - 1);

    // reverse first k elements
    reverse(nums, 0, k - 1);

    // reverse the remaining array
    reverse(nums, k, nums.length - 1);

    return nums;
};

function reverse(nums, start, end) {
    while (start < end) {
        let temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;
        start++;
        end--;
    }
}



// worst case O(n^2)
var rotate = function(nums, k) {

        for(let i = 0; i < k; i++){
            
            let lastNum = nums.pop();

            nums.unshift(lastNum);
        }

    return nums
};
