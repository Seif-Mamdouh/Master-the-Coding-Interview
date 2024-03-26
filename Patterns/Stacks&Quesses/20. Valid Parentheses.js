var isValid = function (s) {
  let pairs = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
    
  let stack = [];

  for (let char of s) {
    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
    } else {
      const top = stack.pop();
      if (!top || pairs[top] !== char) {
        return false;
      }
    }
  }

  return stack.length === 0;
};
