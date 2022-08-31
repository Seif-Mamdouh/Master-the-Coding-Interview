/* 
25. Reverse Nodes in k-Group
Hard

Share
Given the head of a linked list, reverse the nodes 
of the list k at a time, and return the modified list.

k is a positive integer and is less than or equal to the 
length of the linked list. If the number of nodes is not 
a multiple of k then left-out nodes, in the end,
should remain as it is.

You may not alter the values in the list's nodes, 
only nodes themselves may be changed.

Example 1:

Input: head = [1,2,3,4,5], k = 2
Output: [2,1,4,3,5]
Example 2:

Input: head = [1,2,3,4,5], k = 3
Output: [3,2,1,4,5]

*/


class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }

    print_list() {
        let temp = this;
        while (temp !== null) {
            process.stdout.write(`${temp.value}`);
            temp = temp.next;
        }
        console.log();
    }
}

function reverse_alternate_k_elements(head, k) {
 if (k <= 1 || head === null) {
   return head;
 }

 let current = head,
   prev = null;
 while (current !== null) {
   // break if we've reached the end of the list
   const last_node_of_prev_part = prev;
   // after reversing the LinkedList 'current' will become the last node of the sub-list
   const last_node_of_sub_list = current;
   let next = null; // will be used to temporarily store the next node

   // reverse 'k' nodes
   let i = 0;
   while (current !== null && i < k) {
     next = current.next;
     current.next = prev;
     prev = current;
     current = next;
     i += 1;
   }

   // connect with the prev part
   if (last_node_of_prev_part !== null) {
     last_node_of_prev_part.next = prev;
   } else {
     head = prev;
   }

   // connect with the next part
   last_node_of_sub_list.next = current;

   // skip 'k' nodes
   i = 0;
   while (current !== null && i < k) {
     prev = current;
     current = current.next;
     i += 1;
   }
 }
 return head;
}


const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);
head.next.next.next.next.next.next = new Node(7);
head.next.next.next.next.next.next.next = new Node(8);

process.stdout.write("Nodes of original LinkedList are: ");
head.print_list();
result = reverse_alternate_k_elements(head, 2);
process.stdout.write("Nodes of reversed LinkedList are: ");
result.print_list();