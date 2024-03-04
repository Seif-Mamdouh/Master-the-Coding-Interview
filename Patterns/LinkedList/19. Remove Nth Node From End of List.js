// 19. Remove Nth Node From End of List
// Medium

// Given the head of a linked list, remove the nth node from the end of the list and return its head.


// Example 1:


// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]
// Example 2:

// Input: head = [1], n = 1
// Output: []
// Example 3:

// Input: head = [1,2], n = 1
// Output: [1]


///answer

var removeNthFromEnd = function (head, n) {
    //Two pointers fast and slow, they both start at the same time
    let slow = head;
    let fast = head;
    
    //now we need to move fast pointer faster than slow
    for(let i = 0; i < n; i++){
        if(fast.next === null){
            //if n is equal to the number of nodes, delete the head node
            if(i === n - 1){
                head = head.next;
            }
            return head;
        }
        
        fast = fast.next;
    }
    //loop until we reach the end
    //now we will move both fast and slow pointers
    while(fast.next !== null){
        slow = slow.next; 
        fast = fast.next;
    }
    //delink the nth node from the last node
    if (slow.next !== null){
        slow.next = slow.next.next;
    }
    
    return head;
};


// Initialize two pointers slow and fast, pointing to the head of the linked list.
// Move fast pointer n steps ahead.
// Now, move both slow and fast one step at a time unless fast reaches to the end. The fast pointer will definitely reach to the end before slow because it is ahead.
// When we fast pointer reaches to the end, the slow pointer will be n steps behind it i.e., n steps behind the end of the list.
// At that point, we will remove the node and link it to the next of current node.

let tempList = new ListNode(0);
    tempList.next = head;
	
    // set variables for next node and current node
    let slow = tempList;
    let fast = tempList;
	
    // set fast to n nodes ahead of slow
    for (let i = 0; i <= n; i++) {
        fast = fast.next;
    }
	
    // While we haven't reached the end of the list
    // set slow to n nodes behind fast
    while (fast) {
        slow = slow.next;
        fast = fast.next;
    }
	
    // set slow.next to two nodes ahead of slow
    // then return the nth node of the list
    slow.next = slow.next.next;
    return tempList.next;