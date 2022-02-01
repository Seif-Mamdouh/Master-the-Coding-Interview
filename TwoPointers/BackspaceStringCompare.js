// 844. Backspace String Compare

// Share
// Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.

// Note that after backspacing an empty text, the text will continue empty.

 

// Example 1:

// Input: s = "ab#c", t = "ad#c"
// Output: true
// Explanation: Both s and t become "ac".
// Example 2:

// Input: s = "ab##", t = "c#d#"
// Output: true
// Explanation: Both s and t become "".
// Example 3:

// Input: s = "a#c", t = "b"
// Output: false
// Explanation: s becomes "c" while t becomes "b".

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// var backspaceCompare = function(s, t) {
    
//     let stemp = [];
//     let ttemp = [];
    
//     for(let i = 0; i < s.length; i++){
//         s = s.split(''); 
//         let temp = s[i];
//         temp = s[i];
        
//         if(temp === "#"){
//             temp.pop();
//         } else {
//             temp.push(s[i]);
//         }
//     }
    
//     for(let j = 0; j < j.length; j++){
//         t = t.split();
//         let temp2 = t[j]; 
//         t[i] = temp2;
//         if(temp2 === "#"){
//             temp2.pop();
//         } else {
//             temp2.push(t[j]);
//         }
        
//     }
    
//     if(stemp.length === ttemp.length){
//         return true;
//     } else {
//         return false;
//     }
    
// };


// In this solution we use an array like a stack 
// to create 2 new strings from the inputs
// Then we check if they are equal
const backspaceCompare = (S, T) => buildString(S) === buildString(T);
// Helper function
 function buildString(S) {
    // Data structure that we will use to create the compare strings
    const stack = [];
    for (const c of S) {
        // Add letter to the stack if it is not '#'
        if (c != '#')
            stack.push(c);
        // Remove the most recently added letter if we encounter '#'
        // and the stack is not empty
        else if (stack.length!==0) {
            stack.pop();
        }
    }
    // Convert array to an string
    return stack.join('');
}


// 1) Create the charcter array from the input Strings S and T.

// 2) Iterate through the character array of S and at each itereration, check if the character is #

// 3) If yes, then pop the top elements of the stack

// 4) If no, then push the current element on the top of the stack. 

// 5) Create string Stemp from the remaining elements of the stack and clear it. 

// 6) Repeat steps 2, 3, 4 & 5. 

// 7) Compre Stemp and Ttemp, if they are equal return true otherwise return false. 
