var reverseList = function reverse(head) {
  let prev = null;
  let current = head;

  while (current !== null) {
    // save the next node
    const next = current.next;

    // Reverse direction of the current node
    current.next = prev;

    // Move prev && current one step forward
    prev = current;
    current = next;
  }

  return prev;
};
