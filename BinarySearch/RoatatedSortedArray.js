var search = function(nums, target) {

    let high = nums.length - 1;
    let low = 0;
    let mid = Math.floor(nums.length/2);
    let answer = 0;

    while(mid = true){

        if(mid < target){
            answer = low ++;
        }
        else if(mid < target){
           answer = high --;
        }
        else if(mid > target){
            answer = high --;
        }
        else if (mid === target){
            answer = mid;
        }
        else {
            return -1;
        }
    }

    return answer;

};
