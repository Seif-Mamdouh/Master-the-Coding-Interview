var reverseList = function(head) {
    
    if(head == null) return head;
    
    let node = head;
    let prev = null;
    
    while(node){
        let saveNext = node.next;
        node.next = prev;
        prev = node;
        node = saveNext;
    }
    
    return prev
};