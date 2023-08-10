var removeNodes = function (head) {
  const stack = [];
  let cur = head;

  while (cur) {
    while (stack.length > 0 && cur.val > stack[stack.length - 1].val) {
      stack.pop();
    }

    if (stack.length > 0) {
      stack[stack.length - 1].next = cur;
    }

    stack.push(cur);
    cur = cur.next;
  }

  return stack.length > 0 ? stack[0] : null;
};
