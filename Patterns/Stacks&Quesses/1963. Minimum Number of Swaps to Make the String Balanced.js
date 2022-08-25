1963. Minimum Number of Swaps to Make the String Balanced
Medium

940

36

Add to List

Share
You are given a 0-indexed string s of even length n. The string consists of exactly n / 2 opening brackets '[' and n / 2 closing brackets ']'.

A string is called balanced if and only if:

It is the empty string, or
It can be written as AB, where both A and B are balanced strings, or
It can be written as [C], where C is a balanced string.
You may swap the brackets at any two indices any number of times.

Return the minimum number of swaps to make s balanced.

 

Example 1:

Input: s = "][]["
Output: 1
Explanation: You can make the string balanced by swapping index 0 with index 3.
The resulting string is "[[]]".
Example 2:

Input: s = "]]][[["
Output: 2
Explanation: You can do the following to make the string balanced:
- Swap index 0 with index 4. s = "[]][][".
- Swap index 1 with index 5. s = "[[][]]".
The resulting string is "[[][]]".
Example 3:

Input: s = "[]"
Output: 0
Explanation: The string is already balanced.
 

Constraints:

n == s.length
2 <= n <= 106
n is even.
s[i] is either '[' or ']'.
The number of opening brackets '[' equals n / 2, and the number of closing brackets ']' equals n / 2.




//answer 

var minSwaps = function(s) {
    
    //     let i = 0;
    //     let j = s.length - 1;
        
    //     for(let c for s){
            
    //     }
    
           let stk = []
        for(let c of s){
            if(stk && c == ']')    stk.pop()
            else if(c == '[')   stk.push(c)
        }
        console.log(stk);
        return (stk.length) / 2
        
    };
    
    var minSwaps = function(s) {
        let open = 0;
        let close = 0;
        let swaps = 0;
        let arr = s.split("");
        let index = s.length - 1;
        
        for (let i = 0; i < arr.length; i++){
            if (s[i] === "[") {
                ++open;
            } else {
                ++close;
            }
            
            if (close > open) {
                ++swaps;
                --close;
                ++open;
                for (let j = index; j > i; --j) {
                    if (arr[j] === "[") {
                        [arr[i], arr[j]] = [arr[j], arr[i]];
                        index = j - 1;
                        break;
                    }
                }
            }
        }
        
        return swaps;
    };

