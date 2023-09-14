var deleteMiddle = function (head) {
  let slow = head;
  let fast = head;
  let prev = null;

  while (fast && fast.next) {
    prev = slow;
    slow = slow.next;
    fast = fast.next.next;
  }

  if (prev) {
    prev.next = slow.next;
  } else {
    head = head.next;
  }

  return head;
};
