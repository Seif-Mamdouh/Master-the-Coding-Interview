22. Generate Parentheses
Medium

13825

521

Add to List

Share
Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

 

Example 1:

Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]
Example 2:

Input: n = 1
Output: ["()"]


//answer

 var generateParenthesis = function(n) {
    const ans = [];
    backtrack(ans, "", 0, 0, n);
    return ans;
};

function backtrack(ans, cur, open, close, max) {
    if (cur.length == max * 2) {
        ans.push(cur);
        return;
    }

    if (open < max)
        backtrack(ans, cur+"(", open+1, close, max);
    if (close < open)
        backtrack(ans, cur+")", open, close+1, max);
}