nums = [1,3,5,6]

var searchInsert = function(nums, target) {
    //if the element inside of the array is 0, return 0
    if(nums.length === 0) 
        return 0;
    //The number of the left in the array and numbers of on the right of the array.
    var l=0, r = nums.length-1;
    
    if(nums[r] < target) return r+1; 
    while(l<r) {
        var mid = Math.floor((r+l)/2);
        if(nums[mid] < target) l = mid + 1;
        else r = mid;
    }
    return l;
    };
