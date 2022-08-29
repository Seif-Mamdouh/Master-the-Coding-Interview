/*
142. Linked List Cycle II

Medium

Share
Given the head of a linked list, return the node where the cycle begins. If there is no cycle, return null.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to (0-indexed). It is -1 if there is no cycle. Note that pos is not passed as a parameter.

Do not modify the linked list.

 

Example 1:


Input: head = [3,2,0,-4], pos = 1
Output: tail connects to node index 1
Explanation: There is a cycle in the linked list, where tail connects to the second node.
Example 2:


Input: head = [1,2], pos = 0
Output: tail connects to node index 0
Explanation: There is a cycle in the linked list, where tail connects to the first node.
Example 3:


Input: head = [1], pos = -1
Output: no cycle
Explanation: There is no cycle in the linked list.

*/


/*
If we know the length of the LinkedList cycle, we can find the start of 
the cycle through the following steps:

Take two pointers. Let’s call them pointer1 and pointer2.
Initialize both pointers to point to the start of the LinkedList.
We can find the length of the LinkedList cycle using the approach discussed
    in LinkedList Cycle.Let’s assume that the length of the cycle is ‘K’ nodes.
Move pointer2 ahead by ‘K’ nodes.
    
Now, keep incrementing pointer1 and pointer2 until they both meet.
As pointer2 is ‘K’ nodes ahead of pointer1, which means, pointer2 must 
have completed one loop in the cycle when both pointers meet.
Their meeting point will be the start of the cycle.


We can use the algorithm discussed in LinkedList Cycle to find the
length of the 
cycle and then follow the above-mentioned steps to find the start of the cycle.
*/





