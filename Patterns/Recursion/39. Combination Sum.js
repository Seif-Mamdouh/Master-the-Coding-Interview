var combinationSum = function (nums, target) {

    let result = [];
    let currComb = [];

    let backtrack = function (currIndex, total) {


        if (total === 0) {
            result.push([...currComb])
            return
        }

        if (currIndex >= nums.length || total < 0) return;

        currComb.push(nums[currIndex]);
        backtrack(currIndex, total - nums[currIndex])
        currComb.pop();
        backtrack(currIndex + 1, total)

    }


    backtrack(0, target);

    return result;
};


// second solution
var combinationSum = function (candidates, target) {

    let result = [];

    var backtrack = function (currNum, currComb, total) {
        if (total === target) {
            result.push([...currComb]);
            return;
        }

        if (currNum >= candidates.length || total > target) return;

        currComb.push(candidates[i]);
        backtrack(i, currComb, total + candidates[i]);
        currComb.pop();
        backtrack(i + 1, currComb, total);
    }

    backtrack(0, [], 0);
    return result;
};

