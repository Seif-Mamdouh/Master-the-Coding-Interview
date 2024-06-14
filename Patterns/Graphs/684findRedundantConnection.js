// union find solution
// https://leetcode.com/problems/redundant-connection/

var findRedundantConnection = function (edges) {
    const par = Array.from({ length: edges.length}, (_, i) => i);
    const rank = new Array(edges.length).fill(1);
    

    const find = (n) => {
        console.log(`Starting find for node: ${n}`);
        let p = par[n];
        console.log(`Initial parent of node ${n}: ${p}`);
        
        while (p !== par[p]) {
            console.log(`Node ${p} is not a root. Its parent is ${par[p]}`);
            par[p] = par[par[p]]; 
            console.log(`Path compression: setting parent of node ${p} to grand parent${par[p]}`);
            p = par[p];
            console.log(`Moving up the tree: new parent of node ${n} is ${p}`);
        }
        
        console.log(`Root of node ${n} is ${p}`);
        return p;
    };

    const union = (n1, n2) => {
        const p1 = find(n1);
        const p2 = find(n2);

        if (p1 === p2) {
            return false; 
        }

        if (rank[p1] > rank[p2]) {
            par[p2] = p1;
            rank[p1] += rank[p2];
        } else {
            par[p1] = p2;
            rank[p2] += rank[p1];
        }

        return true;
    };

    for (let [n1, n2] of edges) {
        if (!union(n1, n2)) {
            return [n1, n2];
        }
    }

};
const result = findRedundantConnection([[1, 2], [1, 3], [2, 3]]);
console.log(result);





// const testCases = [
//     {
//         edges: [[1, 2], [1, 3], [2, 3]],
//         expected: [2, 3]
//     },
//     {
//         edges: [[1, 2], [2, 3], [3, 4], [1, 4], [1, 5]],
//         expected: [1, 4]
//     },
//     {
//         edges: [[1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 3]],
//         expected: [6, 3]
//     },
//     {
//         edges: [[1, 2], [2, 3], [3, 1]],
//         expected: [3, 1]
//     },
//     {
//         edges: [[1, 2], [2, 3], [3, 4], [4, 5], [5, 1]],
//         expected: [5, 1]
//     }
// ];

// testCases.forEach(({ edges, expected }, index) => {
//     const result = findRedundantConnection(edges);
//     console.log(`Test Case ${index + 1}:`, result.toString() === expected.toString() ? 'Passed' : 'Failed');
// });
