

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