/*
92. Reverse Linked List II
Medium

Given the head of a singly linked list and two integers left and right where left <= right, reverse the nodes of the list from position left to position right, and return the reversed list.

 

Example 1:


Input: head = [1,2,3,4,5], left = 2, right = 4
Output: [1,4,3,2,5]
Example 2:

Input: head = [5], left = 1, right = 1
Output: [5]

*/

/*
1 - Skip the first p - 1 nodes, to reach the node at position p.

2 - Remember the node at position p - 1 to be used later to 
    connect with the reversed sub - list.

3 - Next, reverse the nodes from p to q using the same approach
    discussed in Reverse a LinkedList.
    
4- Connect the p-1 and q+1 nodes to the reversed sub-list.
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

function reverse_sub_list(head, p, q) {
  if (p === q) {
    return head;
  }

  //skipping to the pth node for the starting point
  let current = head,
    prev = null;
  let i = 0;
  while (current !== null && i < p - 1) {
    prev = current;
    current = current.next;
    i += 1;
  }

  // we are interested in three parts of the LinkedList, the part before index 'p',
  // the part between 'p' and 'q', and the part after index 'q'
  const last_node_of_first_part = prev;
  // after reversing the LinkedList 'current' will become the last node of the sub-list
  const last_node_of_sub_list = current;
  let next = null; // will be used to temporarily store the next node

  i = 0;
  //reverse the substring from p-q to q-p;
  while (current !== null && i < q - p + 1) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
    i += 1;
  }
    //connect the first part
  if (last_node_of_first_part !== null) {
    // 'prev' is now the first node of the sub-list
    last_node_of_first_part.next = prev;
    // this means p === 1 i.e., we are changing the first node (head) of the LinkedList
  } else {
    head = prev;
  }

  // connect with the last part
  last_node_of_sub_list.next = current;
  return head;
}

const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

process.stdout.write("Nodes of original LinkedList are: ");
head.print_list();
result = reverse_sub_list(head, 2, 4);
process.stdout.write("Nodes of reversed LinkedList are: ");
result.print_list();
