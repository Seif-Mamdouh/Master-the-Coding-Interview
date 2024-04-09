var evalRPN = function (tokens) {
  let stack = [];

  for (token of tokens.slice()) {
    if (!isNaN(parseInt(token))) {
      stack.push(parseInt(token));
    }
    if (token === "+") {
      let value2 = stack.pop();
      let value1 = stack.pop();
      stack.push(value1 + value2);
    } else if (token === "*") {
      let value2 = stack.pop();
      let value1 = stack.pop();
      stack.push(value1 * value2);
    } else if (token === "/") {
      let operand2 = stack.pop();
      let operand1 = stack.pop();
      stack.push(
        operand1 / operand2 > 0
          ? Math.floor(operand1 / operand2)
          : Math.ceil(operand1 / operand2)
      );
    } else if (token === "-") {
      let value2 = stack.pop();
      let value1 = stack.pop();
      stack.push(value1 - value2);
    }
  }

  return stack.pop();
};


// console.log(!isNaN(parseInt(3)));
