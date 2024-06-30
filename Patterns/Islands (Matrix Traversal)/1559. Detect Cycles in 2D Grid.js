 var containsCycle = function(grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    const visited = Array.from({ length: rows }, () => Array(cols).fill(false));

    function contains_cycle_DFS(matrix, visited, startChar, x, y, prevX, prevY) {
        if (x < 0 || x >= matrix.length || y < 0 || y >= matrix[0].length)
            return false; 
        if (matrix[x][y] !== startChar) return false;
        if (visited[x][y]) return true; 

        visited[x][y] = true; 


        if (x + 1 !== prevX && contains_cycle_DFS(matrix, visited, startChar, x + 1, y, x, y)) return true;
        if (x - 1 !== prevX && contains_cycle_DFS(matrix, visited, startChar, x - 1, y, x, y)) return true;
        if (y + 1 !== prevY && contains_cycle_DFS(matrix, visited, startChar, x, y + 1, x, y)) return true;
        if (y - 1 !== prevY && contains_cycle_DFS(matrix, visited, startChar, x, y - 1, x, y)) return true;

        return false;
    }


    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (!visited[row][col]) {
                const startChar = grid[row][col];
                if (contains_cycle_DFS(grid, visited, startChar, row, col, -1, -1)) {
                    return true; 
                }
            }
        }
    }

    return false; 
};
