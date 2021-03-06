682. Baseball Game
Easy

1775

1679

Add to List

Share
You are keeping score for a baseball game with strange rules. The game consists of several rounds, where the scores of past rounds may affect future rounds' scores.

At the beginning of the game, you start with an empty record. You are given a list of strings ops, where ops[i] is the ith operation you must apply to the record and is one of the following:

An integer x - Record a new score of x.
"+" - Record a new score that is the sum of the previous two scores. It is guaranteed there will always be two previous scores.
"D" - Record a new score that is double the previous score. It is guaranteed there will always be a previous score.
"C" - Invalidate the previous score, removing it from the record. It is guaranteed there will always be a previous score.
Return the sum of all the scores on the record. The test cases are generated so that the answer fits in a 32-bit integer.

 

Example 1:

Input: ops = ["5","2","C","D","+"]
Output: 30
Explanation:
"5" - Add 5 to the record, record is now [5].
"2" - Add 2 to the record, record is now [5, 2].
"C" - Invalidate and remove the previous score, record is now [5].
"D" - Add 2 * 5 = 10 to the record, record is now [5, 10].
"+" - Add 5 + 10 = 15 to the record, record is now [5, 10, 15].
The total sum is 5 + 10 + 15 = 30.
Example 2:

Input: ops = ["5","-2","4","C","D","9","+","+"]
Output: 27
Explanation:
"5" - Add 5 to the record, record is now [5].
"-2" - Add -2 to the record, record is now [5, -2].
"4" - Add 4 to the record, record is now [5, -2, 4].
"C" - Invalidate and remove the previous score, record is now [5, -2].
"D" - Add 2 * -2 = -4 to the record, record is now [5, -2, -4].
"9" - Add 9 to the record, record is now [5, -2, -4, 9].
"+" - Add -4 + 9 = 5 to the record, record is now [5, -2, -4, 9, 5].
"+" - Add 9 + 5 = 14 to the record, record is now [5, -2, -4, 9, 5, 14].
The total sum is 5 + -2 + -4 + 9 + 5 + 14 = 27.
Example 3:

Input: ops = ["1","C"]
Output: 0
Explanation:
"1" - Add 1 to the record, record is now [1].
"C" - Invalidate and remove the previous score, record is now [].
Since the record is empty, the total sum is 0.


//my answer 


var calPoints = function(ops) {
    //intailzing a stack
    const stack = [];
    //intlaizing the output
    let sum = 0;
    
    //you can use switch case or bunch or else if
    for(let i = 0; i < ops.length; i++){
       if(ops[i] === '+'){
           //getting the last value in the stack
           const a = stack[stack.length - 1];
           //getting second last value in the stack
           const b = stack[stack.length - 2];
           //add them
           const add = a + b
           //push it the in stack
           stack.push(add)
           //add the output in the sum var
           sum += (add);
        } else if(ops[i] === 'D'){
            //getting the last value in the stack
            const c = stack[stack.length - 1];
            //multiply by 2
            const m = c * 2;
            //push it the in stack
            stack.push(m);
            //add the value to the sum var
            sum += (m)
        } else if(ops[i] === 'C'){
            //get it out of the stack
            const pop = stack.pop();
            //reduce the value of the sum var
            sum -= pop;
        } else {
            const x = parseInt(ops[i]);
            stack.push(x);
            sum += x;
        }
    }
    
    return sum;
};
