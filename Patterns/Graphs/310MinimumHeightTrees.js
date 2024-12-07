// O(V + E) Time | O(V) Space
var findMinHeightTrees = function (n, edges) {

    const adjlist = Array.from({ length: n }, () => []);
    for(let [n1, n2] of edges){
        adjlist[n1].push(n2);
        adjlist[n2].push(n1);
    }    
};

findMinHeightTrees(4, [[1,0],[1,2],[1,3]]);
