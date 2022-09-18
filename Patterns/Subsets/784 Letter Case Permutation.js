// 784. Letter Case Permutation
// Medium

// 3765

// 148

// Add to List

// Share
// Given a string s, you can transform every letter individually to be lowercase or uppercase to create another string.

// Return a list of all possible strings we could create. Return the output in any order.

 

// Example 1:

// Input: s = "a1b2"
// Output: ["a1b2","a1B2","A1b2","A1B2"]
// Example 2:

// Input: s = "3z4"
// Output: ["3z4","3Z4"]

//  function find_letter_case_string_permutations(str) {
//   permutations = [];
//   permutations.push(str);
//   // process every character of the string one by one
//   for (i = 0; i < str.length; i++) {
//     if (isNaN(parseInt(str[i], 10))) {
//       // only process characters, skip digits
//       // we will take all existing permutations and change the letter case appropriately
//       const n = permutations.length;
//       for (j = 0; j < n; j++) {
//         const chs = permutations[j].split(""); // string to array
//         // if the current char is in upper case, change it to lower case or vice versa
//         if (chs[i] === chs[i].toLowerCase()) {
//           chs[i] = chs[i].toUpperCase();
//         } else {
//           chs[i] = chs[i].toLowerCase();
//         }
//         permutations.push(chs.join(""));
//       }
//     }
//   }

//   return permutations;
// }


function find_letter_case_string_permutations(str) {
  permutations = [];
  permutations.push(str);
  //process every character of the string one by one
  for (let i = 0; i < str.length; i++) {
    if (isNaN(parseInt(str[i], 10))) {
      const n = permutations.length;
      for (let j = 0; j < n; j++) {
        const chs = permutations[j].split("");
        if (chs[i] === chs[i].toLowerCase()) {
          chs[i] = chs[i].toUpperCase()
        } else {
          chs[i] = chs[i].toLowerCase();
        }
        permutations.push(chs.join(""));
      }
    }
  }
  return permutations;
}





console.log(
  `String permutations are: ${find_letter_case_string_permutations("ad52")}`
);
console.log(
  `String permutations are: ${find_letter_case_string_permutations("ab7c")}`
);

const age = "50 is the age";
console.log(parseInt(age));



