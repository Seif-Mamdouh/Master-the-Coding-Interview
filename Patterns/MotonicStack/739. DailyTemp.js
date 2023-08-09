var dailyTemperatures = function (T) {
  let result = new Array(T.length).fill(0);
  let stack = [];

  for (let i = 0; i < T.length; i++) {
    while (stack.length > 0 && T[i] > T[stack[stack.length - 1]]) {
      const prevIndex = stack.pop();
      result[prevIndex] = i - prevIndex;
    }

    stack.push(i);
  }

  return result;
};
