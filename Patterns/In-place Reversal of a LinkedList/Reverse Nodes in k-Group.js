/*

Problem Statement

Given the head of a LinkedList 
and a number ‘k’, reverse every ‘k’ sized sub-list starting 
from the head.

If, in the end, you are left with a sub-list with less
 than ‘k’ elements, reverse it too.

Input: head = [1,2,3,4,5,6], k = 3
Output: [3,2,1,6,5,4]


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



