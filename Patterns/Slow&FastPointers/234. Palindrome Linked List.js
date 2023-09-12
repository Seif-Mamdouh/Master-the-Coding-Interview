var isPalindrome = function is_palindromic_linked_list(head) {
  if (!head || !head.next) {
    return true;
  }

  let slow = head;
  let fast = head;
  let stack = [];

  while (fast && fast.next) {
    stack.push(slow.val);
    slow = slow.next;
    fast = fast.next.next;
  }

  if (fast) {
    slow = slow.next;
  }

  while (slow) {
    let top = stack.pop();
    if (top !== slow.val) {
      return false;
    }
    slow = slow.next;
  }

  return true;
};
