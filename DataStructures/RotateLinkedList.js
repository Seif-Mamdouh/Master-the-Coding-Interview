// 61. Rotate List
// Medium
// Given the head of a linked list, rotate the list to the right by k places.
// Example 1:
// Input: head = [1,2,3,4,5], k = 2
// Output: [4,5,1,2,3]





var rotateRight = function(head, k) {
    
  if (head === null) return null
  // get the length
  let length = 0
  let p = head
  while (p) {
    length += 1
    p = p.next
  }
    // avoid unnecessary loops
    k %= length
    
    // new head would be length - k
  
  // add a new false start node
  const start = new ListNode(0)
  start.next = head
  
  let newHead 
  // the new head index would be length - k + 1
  // total would be length + 1
  p = start
  let i = 0
  
  while (i < length + 1) {
    if (i === length + 1 - 1) {
      p.next = head
    }
    
    if (i === length - k + 1 - 1) {
      newHead = p.next
      p.next = null
      p = newHead
    } else {
      p = p.next
    }
    
    i += 1
  }
  
  return newHead
   
};


// Two pointers and LL
// My Favorite

// Traverse the given linked list, to find out the total number (count) of nodes in the list. If given integer value k is greater than or equal to count, then perform modulus operation on k (k = k % count)
// If the value of k is greater than zero, then create two variables first and second pointing to the head of the linked list.
// Move the second variable to the right by k places.
// Move both first and second variables together, until the second variable reaches last node of the linked list.
// Assign null to first.next, head to second.next.