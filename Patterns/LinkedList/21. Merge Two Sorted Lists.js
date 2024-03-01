var mergeTwoLists = function (list1, list2) {
  let dummy = new ListNode();
  let tail = dummy;

  while (list1 && list2) {
    if (list1.val > list2.val) {
      tail.next = list2;
      list2 = list2.next;
    } else {
      tail.next = list1;
      list1 = list1.next;
    }
    tail = tail.next;
  }

  tail.next = list1 || list2;

  return dummy.next;
};
