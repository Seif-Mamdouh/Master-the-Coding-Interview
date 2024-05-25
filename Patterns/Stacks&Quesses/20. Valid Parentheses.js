// var isValid = function (s) {
//   let pairs = {
//     "(": ")",
//     "{": "}",
//     "[": "]",
//   };
    
//   let stack = [];

//   for (let char of s) {
//     if (char === "(" || char === "{" || char === "[") {
//       stack.push(char);
//     } else {
//       const top = stack.pop();
//       if (!top || pairs[top] !== char) {
//         return false;
//       }
//     }
//   }

//   return stack.length === 0;
// };


const logEvenOrOdd = (x) => {
  for (let t = 1; t < x + 1; t++) {
    if (t % 2 === 0) {
      console.log("Even");
    } else {
      console.log("Odd");
    }
  }
};

logEvenOrOdd(10);
