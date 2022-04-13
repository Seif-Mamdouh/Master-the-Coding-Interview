class Node {
    constructor(value) {
        this.left = null;
        this.right = null; 
        this.value = value;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        
    }
    lookup(value) {

    }
    remove(value) {
        
    }

    breadthFirstSearch() {
    let currentNode = this.root;
    let list = [];
    let queue = [];
    queue.push(currentNode);

    while(queue.length > 0){
      currentNode = queue.shift();
      list.push(currentNode.value);
      if(currentNode.left) {
        queue.push(currentNode.left);
      }
      if(currentNode.right) {
        queue.push(currentNode.right);
      }
    }
    return list;
    }
    DFSInOrder(){
      return traverseInOrder(this.root, [])
    }

     DFSPostOrder(){
       return traversePostOrder(this.root, [])
      
    }

     DFSPreOrder(){
       return traversePreOrder(this.root, [])
    }

    function traverseInOrder(node, list){
      // if the node has a left child, then traverse all the way down
      if(node.left){
        traverseInOrder(node.left, list)
      }
      //once there are no more nodes, push the last node
      list.push(node.value)
       if(node.right){
        traverseInOrder(node.right, list)
      }
      return list;
    }

    function traversePreOrder(node, list){
      //we push the value first and start with the parent first
      list.push(node.value)
      if(node.left){
        traversePreOrder(node.left, list)
      }

      if(node.right){
        traversePreOrder(node.right, list)
      }
    }

    function traversePostOrder(node, list){

      if(node.left){
        traversePostOrder(node.left, list)
      }

      if(node.right){
        traversePostOrder(node.right, list)
      }
      list.push(node.value)
    }


} 

//        9 
//    4       20
//  1   6   15  170

//diff types of DFS orders
//1 In Order = [1, 4, 6, 9, 15, 20, 170]
//pre order is useful when u recreate a tree
//2 Pre Order = [9, 4, 1, 6, 20, 15, 170]
//children come before the parent, then parents come before the root
//3 Post Order = [1, 6, 4, 15, 170, 20, 9]

const tree = new BinarySearchgTree(); 
tree.insert(9); 
tree.insert(4); 
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
tree.DFSInOrder();

console.log('BFS', tree.BreadthFirstSearch());

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}