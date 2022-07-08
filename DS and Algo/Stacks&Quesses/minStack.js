155. Min Stack
Medium

8634

646

Add to List

Share
Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

Implement the MinStack class:

MinStack() initializes the stack object.
void push(int val) pushes the element val onto the stack.
void pop() removes the element on the top of the stack.
int top() gets the top element of the stack.
int getMin() retrieves the minimum element in the stack.
You must implement a solution with O(1) time complexity for each function.

 

Example 1:

Input
["MinStack","push","push","push","getMin","pop","top","getMin"]
[[],[-2],[0],[-3],[],[],[],[]]

Output
[null,null,null,null,-3,null,0,-2]

Explanation
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin(); // return -3
minStack.pop();
minStack.top();    // return 0
minStack.getMin(); // return -2





//answer

function last(stack){
    //having access to the last element in the stack
    return stack[stack.length - 1]
}
class MinStack {
    //creating our stack and minstskc
    constructor(){
        this.stack = []
        this.minStack = []
    }
push(x){
    //pushing everythiung into the mainStack, however we are also trying to match with the mainStack 
    //and piush the most recent min value in the stack
    if(this.minStack.length === 0 || x <= last(this.minStack)){
        this.minStack.push(x);
        }
    //otehrwise push everything in the stack
    this.stack.push(x)
    }
    pop(){
        //pop the most recent min if it is equal to the one in the mainStack
        if(last(this.minStack) === last(this.stack)){
            this.minStack.pop();
        }
        return this.stack.pop()
    }
    top(){
        return last(this.stack)
    }
    
    getMin(){
        return last(this.minStack)
    }
    
}