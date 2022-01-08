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

        while (queue.length > 0) {
            currentNode = queue.shift();
            console.log(currentNode.value);
            //first value is the
            list.push(currentNode.value);
            if (currentNode.left) {
                queue.push(currentNode.left);
            }
            if (currentNode.right) {
                queue.push(currentNode.right);
            }
        }
        return list;
    }
} 

//        9 
//    4       20
//  1   6   15  170

const tree = new BinarySearchgTree(); 
tree.insert(9); 
tree.insert(4); 
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);

console.log('BFS', tree.BreadthFirstSearch());

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}