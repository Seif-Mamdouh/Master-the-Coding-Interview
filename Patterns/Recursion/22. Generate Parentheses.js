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
