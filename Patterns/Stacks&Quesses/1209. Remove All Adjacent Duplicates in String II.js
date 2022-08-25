1209. Remove All Adjacent Duplicates in String II
Medium

4122

78

Add to List

Share
You are given a string s and an integer k, a k duplicate removal consists of choosing k adjacent and equal letters from s and removing them, causing the left and the right side of the deleted substring to concatenate together.

We repeatedly make k duplicate removals on s until we no longer can.

Return the final string after all such duplicate removals have been made. It is guaranteed that the answer is unique.

 

Example 1:

Input: s = "abcd", k = 2
Output: "abcd"
Explanation: There's nothing to delete.
Example 2:

Input: s = "deeedbbcccbdaa", k = 3
Output: "aa"
Explanation: 
First delete "eee" and "ccc", get "ddbbbdaa"
Then delete "bbb", get "dddaa"
Finally delete "ddd", get "aa"
Example 3:

Input: s = "pbbcggttciiippooaais", k = 2
Output: "ps"



//answer

var removeDuplicates = function(s, k) {
    
    if(k === 1){
        return "";
    };
    
    let stack = [];
    
    for(let i = 0; i<s.length; i++){
        // result.push([s[i], 1]);
        if(stack.length === 0 || s[i] !== stack[stack.length - 1][0]){
            stack.push([s[i] ,1]);
        } else {
           stack[stack.length - 1] [1] ++;
        }
        
        if(stack[stack.length - 1] [1] === k){
            stack.pop();
            // let stacks = JSON.stringify(stack)
           
        }

    }
    stack.slice(0,1).join("");
    console.log(stack);
    return stack[stack.length - 1][0].repeat(stack[stack.length - 1][1]);
};
    
    
    
    /*
    [    
    
    
    
    
    
    
    
    e,2
    d,1
    ]
    */