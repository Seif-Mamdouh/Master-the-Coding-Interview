var removeKdigits = function (num, k) {
  let stack = [];

  for (const digit of num) {
    while (stack.length > 0 && digit < stack[stack.length - 1] && k > 0) {
      stack.pop();
      k--;
    }
    stack.push(digit);
  }

  while (k > 0) {
    stack.pop();
    k--;
  }

  let result = stack.join("").replace(/^0+/, "");

  if (result === "") {
    return "0";
  } else {
    return result;
  }
};
