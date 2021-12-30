// Given the head of a singly linked list, reverse the list, and return the reversed list.
//Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]

var reverseList = function (head) {
  let prev = null,
    next = null;

  while (head) {
    next = head.next;
    //changing the pointers
    head.next = prev;
    prev = head;
    head = next;
  }

  return prev;
};

//so basically this is taking the Linked List
//And flipping it upside down
//Easy like a Sunday morning

//So, now coding it
//So we know that a LL has a head a tail
//Nodes in between connected with nodes

//in order to keep this clear and simple, we gonna reverse the pointer
//and make the tail the head & head is tail.
