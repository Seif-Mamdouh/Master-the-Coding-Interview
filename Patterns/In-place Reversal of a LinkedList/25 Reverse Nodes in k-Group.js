/*

25. Reverse Nodes in k - Group
Hard

Given the head of a linked list, 
reverse the nodes of the list k at a time, 
and return the modified list.

k is a positive integer and is less than or 
equal to the length of the linked list. 
If the number of nodes is not a multiple of k 
then left-out nodes, in the end, should remain as it is.

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

function reverse_sub_list(head, k) {
    if (head === null || k < 1) {
        return head;
    }

    let current = head,
        prev = null;
    
    while (true) {
      const last_node_of_previous_part = prev;
      const last_node_of_sub_list = current;
      let next = null;
      let i = 0;
      while (current !== null && i < k) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
        i += 1;
      }

      if (last_node_of_previous_part !== null) {
        //'prev' is now the first node of the sub-list
          last_node_of_previous_part.next = prev;
      } else {
          head = prev;
      }
    // connect with the next part
        last_node_of_sub_list.next = current;
        
        if (current === null) {
            break;
        }
        prev = last_node_of_sub_list;
    }
    return head;
}


/*

The problem follows the In - place Reversal 
of a LinkedList pattern and is quite similar to
Reverse a Sub - list.The only difference is that we have to r
reverse all the sub - lists.We can use the same approach, starting
with the first sub - list(i.e.p = 1, q = k) and keep reversing 
all the sublists of size ‘k’.

*/