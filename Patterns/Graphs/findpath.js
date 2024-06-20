function path(s, e, edges) {

    let adjlist = new Array(edges.length + 1).fill().map(() => new Array());


    for (let [from, to] of edges) {
        adjlist[from].push(to);
    }


    let visited = new Set();
    let stack = [s];


    while (stack.length > 0) {
        const node = stack.pop();
        visited.add(node);


        for (let neighbor of adjlist[node]) {
            if (neighbor === e) {
                return true; 
            }
            if (!visited.has(neighbor)) {
                stack.push(neighbor); 
            }
        }
    }

    return false; 
}



console.log(path(4, 5, [[1, 2], [2, 3], [3, 4], [4, 5]]));
console.log(path(1, 6, [[1, 2], [2, 3], [3, 4], [4, 5], [0, 6]]));
