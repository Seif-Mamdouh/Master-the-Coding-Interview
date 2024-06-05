
# Interview Question: Memoize

Build a function “memoize” that takes, as an argument, a function ‘A’ that takes a single argument, and returns a function that when called stores the result from calling function ‘A’ and returns it if the returned function is called again with the same argument.

This question should take 15-20 minutes but can potentially be extended for a full interview with the follow-ups below.

Watch the Brown Bag session for more details.

Setup
Explain that when we re-render our UI, we noticed there was one function that does an expensive calculation but it always returns the same result for the same inputs. We realized the best way to handle this was with a generic memoization function.
Defintion: Memoization is an optimization technique used primarily to speed up computer programs by storing the results of expensive function calls and returning the cached result when the same inputs occur again.
Explain that, for the time being, memoize only accepts functions that take one argument like expensiveFunc (below).

A concrete, simple example with a primitive value arg:

```js
function memoize(funcA) {
// code goes here
}

function expensiveFunc(y) {
  // Pretend some expensive calculation happens here.
  return y * 10;
};

const expensiveFuncMemoized = memoize(expensiveFunc);

expensiveFuncMemoized(5); // 50 returned (expensiveFunc called)
expensiveFuncMemoized(5); // 50 returned (expensiveFunc not called)

expensiveFuncMemoized(7); // 70 returned (expensiveFunc called)
expensiveFuncMemoized(5); // 50 returned (expensiveFunc not called)
expensiveFuncMemoized(7); // 70 returned (expensiveFunc not called)
```
