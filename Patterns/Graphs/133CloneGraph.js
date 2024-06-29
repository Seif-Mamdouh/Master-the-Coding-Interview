// Definition for a Node.
 function Node(val, neighbors) {
     this.val = val === undefined ? 0 : val;
     this.neighbors = neighbors === undefined ? [] : neighbors;
 };
/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGrpah = function (node) {
    
    if (!node) return null;

    const oldoToNew = new Map();
    
    function dfs(verticy) {
        if (map.has(verticy.val)) return map.get(verticy.val);
        
        let copy = new Node(verticy.val);
        map.set(verticy.val, copy);
        
        for (let neighbor of verticy.neighbors) {
            copy.neighbors.push(dfs(neighbor));
        }
        return copy;
    }

}


//BFS
// Definition for a Node.
function Node(val, neighbors) {
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
}

var cloneGraph = function(node) {
    if (!node) return null;
    
    const oldToNew = new Map();
    const queue = [node];
    
    const copy = new Node(node.val);
    oldToNew.set(node, copy);
    
    while (queue.length > 0) {
        const currNode = queue.shift();
        
        for (const neighbor of currNode.neighbors) {
            if (!oldToNew.has(neighbor)) {
                const newNeighbor = new Node(neighbor.val);
                oldToNew.set(neighbor, newNeighbor);
                queue.push(neighbor);
            }
            oldToNew.get(currNode).neighbors.push(oldToNew.get(neighbor));
        }
    }
    
    return copy;
};
