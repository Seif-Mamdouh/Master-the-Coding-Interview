// 234. Palindrome Linked List
// Easy

// 11431

// 643

// Add to List

// Share
// Given the head of a singly linked list, return true if it is a palindrome or false otherwise.

 

// Example 1:


// Input: head = [1,2,2,1]
// Output: true
// Example 2:


// Input: head = [1,2]
// Output: false

/*

1 - We can use the Fast & Slow pointers method similar to 
    Middle of the LinkedList to find the middle node of the LinkedList.
2 - Once we have the middle of the LinkedList,
    we will reverse the second half.
3 - Then, we will compare the first half with the 
    reversed second half to see if the LinkedList represents a palindrome.
4 - Finally, we will reverse the second half of the LinkedList  
    again to revert and bring the LinkedList back to its original form.

*/

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

function is_palindromic_linked_list(head) {
  if (head === null || head.next === null) {
    return true;
  }

  // find middle of the LinkedList
  let slow = head,
    fast = head;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  headSecondHalf = reverse(slow); // reverse the second half
  // store the head of reversed part to revert back later
  copyHeadSecondHalf = headSecondHalf;

  // compare the first and the second half
  while (head !== null && headSecondHalf !== null) {
    if (head.value !== headSecondHalf.value) {
      break; // not a palindrome
    }

    head = head.next;
    headSecondHalf = headSecondHalf.next;
  }
  reverse(copyHeadSecondHalf); // revert the reverse of the second half

  if (head === null || headSecondHalf === null) {
    // if both halves match
    return true;
  }

  return false;
}

function reverse(head) {
  let prev = null;
  while (head !== null) {
    next = head.next;
    head.next = prev;
    prev = head;
    head = next;
  }
  return prev;
}