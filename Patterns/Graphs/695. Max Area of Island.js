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
