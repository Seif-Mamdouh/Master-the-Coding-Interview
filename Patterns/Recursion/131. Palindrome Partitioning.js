var partition = function (s) {

    let result = [];
    let currPal = [];

    var backtrack = function (start) {
        if (start >= s.length) {
            result.push([...currPal]);
            return;
        }

        for (let end = start; end < s.length; end++) {
            if (isPalindrome(s, start, end)) {
                currPal.push(s.slice(start, end + 1));
                backtrack(end + 1);
                currPal.pop();
            }
        }
    }

    function isPalindrome(str, left, right) {
        while (left < right) {
            if (str[left] !== str[right]) return false;
            left++;
            right--;
        }
        return true;
    }

    backtrack(0);
    return result;
};
