

var reverseBetween = function (head, left, right) {
  const dummy = new ListNode(0, head);

  let leftPrev = dummy;
  let slow = head;

  for (let i = 1; i < left; i++) {
    leftPrev = slow;
    slow = slow.next;
  }

  let prev = null;
  for (let j = 0; j < right - left + 1; j++) {
    const curNode = slow.next;

    slow.next = prev;
    prev = slow;

    slow = curNode;
  }

  //prev = [4, 3, 2]
  //leftPrev = [1, 2]

  leftPrev.next.next = slow;
  leftPrev.next = prev;

  return dummy.next;
};
