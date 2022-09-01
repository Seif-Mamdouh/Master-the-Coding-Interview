// Given the head of a Singly LinkedList, reverse the LinkedList. Write a function to return the new head of the reversed LinkedList.


/* 

To reverse a LinkedList, we need to reverse one node at a time. We will start with a variable current 
which will initially point to the head of the LinkedList and a variable previous which will point to the 
previous node that we have processed; initially previous will point to null.

In a stepwise manner, we will reverse the current node by pointing it to the previous before moving 
on to the next node. 

Also, we will update the previous to always point to 
the previous node that we have processed. Here is the visual representation of our algorithm:

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
    let current = head;
    let prev = null;

    while (current !== null) {
        next = current.next; //pointer
        current.next = prev; 
        prev = current;
        current = next;
    }
    return prev;
}

const head = new Node(2);
head.next = new Node(3);
head.next.next = new Node(4);
head.next.next.next = new Node(5);
head.next.next.next.next = new Node(6);
head.next.next.next.next.next = new Node(8);
head.next.next.next.next.next.next = new Node(10);

process.stdout.write("Nodes of original LinkedList are: ");
head.print_list();
result = reverse(head);
process.stdout.write("Nodes of reversed LinkedList are: ");
result.print_list();
