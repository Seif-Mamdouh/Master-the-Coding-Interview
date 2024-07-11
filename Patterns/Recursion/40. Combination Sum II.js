var combinationSum2 = function (candidates, target) {

    let result = [];

    candidates.sort((a, b) => a - b);

    var backtrack = function (currNum, currComb, total) {
        if (total === target) {
            result.push([...currComb]);
            return;
        }

        if (total > target) return;

        for (let i = currNum; i < candidates.length; i++) {
            if (i > currNum && candidates[i] === candidates[i-1]) continue;

            currComb.push(candidates[i]);
            backtrack(i + 1, currComb, total + candidates[i]);
            currComb.pop();
        }
    }

    backtrack(0, [], 0);
    return result;
};
