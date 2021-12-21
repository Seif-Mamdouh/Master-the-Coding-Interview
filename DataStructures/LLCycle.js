//LeetCode 141
// Given head, the head of a linked list, determine if the linked list has a cycle in it.

// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

// Return true if there is a cycle in the linked list. Otherwise, return false.

//Input: head = [3,2,0,-4], pos = 1
// Output: true
// Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).

// Input: head = [1,2], pos = 0
// Output: true
// Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.


function hasCycle(head) {
    
    let Oscar = head; 
    let Seif = head;
    
    while(Seif !== null || Seif.next !== null){
        Seif == Seif.next.next;
        Oscar == Oscar.next;
        
        if(Oscar == Seif){
            return true;
        }
    }
    
    return false;
};



var hasCycle = function(head) {
    if(!head) {
        return false;
    }
    let hare = head;
    let tortoise = head;
    while(hare) {
        if(!hare.next) {
            return false;
        } else {
            hare = hare.next.next;
            tortoise = tortoise.next;
        }
        if(tortoise == hare) {
            return true;
        }
    }
    return false;
};


var hasCycle = function(head) {
  let tortoise = hare = head
  while (hare !== null && hare.next !== null) {
    tortoise = tortoise.next
    hare = hare.next.next
    if (tortoise === hare) {
      return true
    }
  }
  return false
};