// 150. Evaluate Reverse Polish Notation
// Medium

// 3454

// 658

// Add to List

// Share
// Evaluate the value of an arithmetic expression in Reverse Polish Notation.

// Valid operators are +, -, *, and /. Each operand may be an integer or another expression.

// Note that division between two integers should truncate toward zero.

// It is guaranteed that the given RPN expression is always valid. That means the expression would always evaluate to a result, and there will not be any division by zero operation.

 

// Example 1:

// Input: tokens = ["2","1","+","3","*"]
// Output: 9
// Explanation: ((2 + 1) * 3) = 9
// Example 2:

// Input: tokens = ["4","13","5","/","+"]
// Output: 6
// Explanation: (4 + (13 / 5)) = 6
// Example 3:

// Input: tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
// Output: 22
// Explanation: ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
// = ((10 * (6 / (12 * -11))) + 17) + 5
// = ((10 * (6 / -132)) + 17) + 5
// = ((10 * 0) + 17) + 5
// = (0 + 17) + 5
// = 17 + 5
// = 22

var evalRPN = function (tokens) {
  let stack = [];
  for (let i = 0; i < tokens.length; i++) {
    if (!isNaN(parseInt(tokens[i]))) {
      stack.push(parseInt(tokens[i]));
    } else {
      let val1 = stack.pop();
      let val2 = stack.pop();
      if (tokens[i] === "+") {
        stack.push(val1 + val2);
      }
      if (tokens[i] === "-") {
        stack.push(val2 - val1);
      }
      if (tokens[i] === "*") {
        stack.push(val1 * val2);
      }
      if (tokens[i] === "/") {
        stack.push(Math.trunc(val2 / val1));
      }
    }
  }
  return stack.pop();
};



//answer

var evalRPN = function(tokens) {
  var stack = [];
  var len = tokens.length;
  var n1 = 0;
  var n2 = 0;
  var n3 = 0;
  var token = '';
  for (var i = 0; i < len; i++) {
    token = tokens[i];
    switch (token) {
      case '+':
        stack.push(stack.pop() + stack.pop());
        break;
      case '-':
        n1 = stack.pop();
        n2 = stack.pop();
        stack.push(n2 - n1);
        break;
      case '*':
        stack.push(stack.pop() * stack.pop());
        break;
      case '/':
        n1 = stack.pop();
        n2 = stack.pop();
        n3 = n2 / n1;
        stack.push(n3 > 0 ? Math.floor(n3) : Math.ceil(n3));
        break;
      default:
        stack.push(Number(token));
    }
  }
  return stack.pop();
};
