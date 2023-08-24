var finalPrices = function (prices) {
  let stack = [];
  let result = [];

  for (let i = 0; i < prices.length; i++) {
    while (stack.length > 0 && prices[i] <= prices[stack[stack.length - 1]]) {
      let lastIndex = stack.pop();
      result[lastIndex] = prices[lastIndex] - prices[i];
    }

    stack.push(i);
    result.push(prices[i]);
  }

  return result;
};
