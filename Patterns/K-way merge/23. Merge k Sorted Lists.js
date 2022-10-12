// 23. Merge k Sorted Lists
// Hard
// 14.4K
// 539
// Companies
// You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

// Merge all the linked-lists into one sorted linked-list and return it.

 

// Example 1:

// Input: lists = [[1,4,5],[1,3,4],[2,6]]
// Output: [1,1,2,3,4,4,5,6]
// Explanation: The linked-lists are:
// [
//   1->4->5,
//   1->3->4,
//   2->6
// ]
// merging them into one sorted list:
// 1->1->2->3->4->4->5->6
// Example 2:

// Input: lists = []
// Output: []



var mergeKLists = function (lists) {
  const minHeap = new MinPriorityQueue();

  //add every node to minHeap
  for (let list of lists) {
    while (list) {
      minHeap.enqueue(list.val);
      list = list.next;
    }
  }

  const dummy = new ListNode(-1);
  let head = dummy;

  while (!minHeap.isEmpty()) {
    //console.log(minHeap.dequeue())
    head.next = new ListNode(minHeap.dequeue().element);
    head = head.next;
  }

  return dummy.next;
};