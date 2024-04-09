var calculate = function (s) {
  let stack = [];
  let num = 0;
  let sign = "+";

  for (let i = 0; i < s.length; i++) {
    if (!isNaN(parseInt(s[i])) && s[i] !== " ") {
      num = num * 10 + parseInt(s[i]);
    }
    if ((isNaN(parseInt(s[i])) && s[i] !== " ") || i === s.length - 1) {
      if (sign === "+") {
        stack.push(num);
      } else if (sign === "-") {
        stack.push(-num);
      } else if (sign === "*") {
        stack.push(stack.pop() * num);
      } else if (sign === "/") {
        stack.push(Math.trunc(stack.pop() / num));
      }
      sign = s[i];
      num = 0;
    }
  }

  let result = 0;
  while (stack.length > 0) {
    console.log("stack is " + stack);
    result += stack.pop();
    console.log("result after popping " + result);
  }
  return result;
};
