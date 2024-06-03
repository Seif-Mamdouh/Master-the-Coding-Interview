function memoize(funcA) {
  const map = new Map();

  return (...args) => {
    if (map[args]) { return maps[args] }
    const result = funcA(...args);
    map[args] = result;
    return result
  }
}

function expensiveFunc(y) {
  // Pretend some expensive calculation happens here.
  return y * 10;
}

const expensiveFuncMemoized = memoize(expensiveFunc);

expensiveFuncMemoized(5); // 50 returned (expensiveFunc called)
expensiveFuncMemoized(5); // 50 returned (expensiveFunc not called)

expensiveFuncMemoized(7); // 70 returned (expensiveFunc called)
expensiveFuncMemoized(5); // 50 returned (expensiveFunc not called)
expensiveFuncMemoized(7); // 70 returned (expensiveFunc not called)
