/*
206. Reverse Linked List
Easy

14229

246

Add to List

Share
Given the head of a singly linked list, reverse the list, and return the reversed list.

 

Example 1:


Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]
Example 2:


Input: head = [1,2]
Output: [2,1]
Example 3:

Input: head = []
Output: []
*/

/*

To reverse a LinkedList, we need to reverse one node at a time. We will start with 
a variable current which will initially point to the head of the LinkedList and a variable previous which will 
point to the previous node that we have processed; initially previous will point to null.

In a stepwise manner, we will reverse the current node by pointing it to the previous before moving on to the next node.
Also, we will update the previous to always point to the previous node that we have processed. 

*/

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }

  print_list() {
    let temp = this;
    while (temp !== null) {
      process.stdout.write(`${temp.value} `);
      temp = temp.next;
    }
    console.log();
  }
}

function reverse(head) {
    let current = head,
        previous = null;
    while (current !== null) {
      next = current.next; // temporarily store the next node
      current.next = previous; // reverse the current node
      // before we move to the next node, point previous to the current node
      previous = current;
      current = next; // move on the next node
    }
    return previous;
}

const head = new Node(2);
head.next = new Node(4);
head.next.next = new Node(6);
head.next.next.next = new Node(8);
head.next.next.next.next = new Node(10);

process.stdout.write("Nodes of original LinkedList are: ");
head.print_list();
result = reverse(head);
process.stdout.write("Nodes of reversed LinkedList are: ");
result.print_list();