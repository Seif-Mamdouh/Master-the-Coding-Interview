// O(n * m) time | O(n * m) space BFS
var maxAreaOfIsland = function(grid) {
    if (!grid || grid.length === 0) {
        return 0;
    }

    const rows = grid.length;
    const cols = grid[0].length;
    let maxArea = 0;
    const visited = new Set();

    function bfs(r, c) {
        let area = 0;
        const queue = [[r, c]];
        visited.add(`${r},${c}`);
        
        const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
        
        while (queue.length > 0) {
            const [row, col] = queue.shift();
            area++;
            
            for (const [dr, dc] of directions) {
                const newRow = row + dr;
                const newCol = col + dc;
                
                if (
                    newRow >= 0 && 
                    newRow < rows && 
                    newCol >= 0 && 
                    newCol < cols &&
                    grid[newRow][newCol] === 1 && 
                    !visited.has(`${newRow},${newCol}`)
                ) {
                    queue.push([newRow, newCol]);
                    visited.add(`${newRow},${newCol}`);
                }
            }
        }
        
        return area;
    }

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === 1 && !visited.has(`${r},${c}`)) {
                maxArea = Math.max(maxArea, bfs(r, c));
            }
        }
    }

    return maxArea;
};


// O(n * m) time | O(n * m) space DFS
var maxAreaOfIsland = function(grid) {
    let rows = grid.length;
    let cols = grid[0].length;

    let maxArea = 0;

    const dfs = (grid, row, col) => {
        if (row < 0 || col < 0 || row >= rows || col >= cols || grid[row][col] === 0) {
            return 0;
        }

        
        grid[row][col] = 0;

        let area = 1;

        
        area += dfs(grid, row - 1, col);
        area += dfs(grid, row + 1, col);
        area += dfs(grid, row, col - 1);
        area += dfs(grid, row, col + 1);

        return area;
    };

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (grid[row][col] === 1) {
                let area = dfs(grid, row, col);
                maxArea = Math.max(maxArea, area);
            }
        }
    }

    return maxArea;
};
