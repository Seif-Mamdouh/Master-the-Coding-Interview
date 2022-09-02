// Given the head of a LinkedList and a number 
// ‘k’, reverse every ‘k’ sized sub - list starting from the head.

// If, in the end, you are left with a sub - list with less than 
// ‘k’ elements,
// reverse it too.


/*

The problem follows the In - place Reversal 
of a LinkedList pattern and is quite similar to
Reverse a Sub - list.The only difference is that we have to r
reverse all the sub - lists.We can use the same approach, starting
with the first sub - list(i.e.p = 1, q = k) and keep reversing 
all the sublists of size ‘k’.

*/



class Node {
  constructor(value, next = null) {
    this.value;
    this.next;
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

function reverse_every_k_elements(head, k) {
    let current = head,
        prev = null;
    let i = 0;

    while (true){
        let last_node_of_previous_part = prev;

        let last_node_of_sub_list = current;
        let next = null;

        while (current !== null && i < k) {
                next = current.next;
                current.next = prev;
                prev = current;
                current = next;
                i += 1;
        }

        if (last_node_of_previous_part !== null) {
            last_node_of_previous_part.next = prev;
        } else {
            head = prev;
        }

        last_node_of_first_part.next = current;

    if (current === null) {
      break;
    }
    previous = last_node_of_sub_list;
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
result = reverse_every_k_elements(head, 3);
process.stdout.write("Nodes of reversed LinkedList are: ");
result.print_list();


