var removeDuplicates = function (s, k) {
  if (k === 1) {
    return " ";
  }

  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (stack.length === 0 || s[i] !== stack[stack.length - 1][0]) {
      stack.push([s[i], 1]);
    } else {
      stack[stack.length - 1][1]++;
    }

    if (stack[stack.length - 1][1] === k) {
      stack.pop();
    }
  }

  let result = "";
  for (const [char, count] of stack) {
    result += char.repeat(count);
  }

  return result;
};


// Runtime
// Details
// 68ms
// Beats 93.33%of users with JavaScript
// Memory
// Details
// 49.20mb
// Beats 89.52%of users with JavaScript