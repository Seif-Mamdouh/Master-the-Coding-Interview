// Premuim

var getFactors = function (n) {
    if (n <= 3) return [];

    let result = [];

    let backtrack = function (start, currComb, remaining) {
        if (currComb.length > 0) {
            result.push([...currComb, remaining]);
        }

        for (let i = start; i <= Math.sqrt(remaining); i++) {
            if (remaining % i === 0) {
                currComb.push(i);
                backtrack(i, currComb, remaining / i);
                currComb.pop();
            }
        }
    }

    backtrack(2, [], n);
    return result.filter(comb => comb.length > 1);
};
