// Given the head of a LinkedList and two positions ‘p’ and ‘q’, reverse the LinkedList from position ‘p’ to ‘q’.


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

    let current = head;
    let prev = null;

    let i = 0;
    while (current !== null && i < p - 1) {
        prev = current; 
        current = current.next;
        i += 1;
    }

    // three parts that we are interested  in 
    // 1 - before the p
    // 2- After the q
    // 3 - inbetween the p and q
    
    let last_node_of_first_part = prev;

    let last_node_sublist = current;
    let next = null;

    //now reverse p - q together
    i = 0;
    while (current !== null && i < q - p + 1) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
        i += 1;
    }

    //connect p - q 
    if (last_node_of_first_part !== null) {
        last_node_of_first_part.next = prev;
    } else {
        head = prev;
    }

    //connect the last part 
    last_node_sublist.next = current;
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