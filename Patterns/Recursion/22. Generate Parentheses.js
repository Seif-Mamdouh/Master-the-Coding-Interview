//better approach
var generateParenthesis = function (n) {
  let result = [];

  let backTrack = function (open, close, parenthesis) {
    console.log(parenthesis);
    if (open === close && open === n) {
      result.push(parenthesis);
      return;
    }
    if (open < n) {
      const updatedParenthesis = parenthesis + "(";
      backTrack(open + 1, close, updatedParenthesis);
    }

    if (close < open) {
      const updatedParenthesis = parenthesis + ")";
      backTrack(open, close + 1, updatedParenthesis);
    }
  };

  backTrack(0, 0, "");
  return result;
};

var generateParenthesis = function (n) {
  let result = [];
  let current = "";

  let recursion = function (openCount, closeCount) {
    if (current.length === n * 2) {
      result.push(current);
      return;
    }

    if (openCount < n) {
      current += "(";
      recursion(openCount + 1, closeCount);
      current = current.slice(0, -1); // Backtrack: remove the last "("
    }

    if (closeCount < openCount) {
      current += ")";
      recursion(openCount, closeCount + 1);
      current = current.slice(0, -1); // Backtrack: remove the last ")"
    }
  };

  recursion(0, 0);

  return result;
};
