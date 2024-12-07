// O(V + E) Time | O(V) Space
function numIslands(grid) {
    if (!grid || grid.length === 0) {
        return 0;
    }

    let numIslands = 0;
    const rows = grid.length;
    const cols = grid[0].length;

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (grid[row][col] === '1') {
                numIslands++;
                dfs(grid, row, col, rows, cols);
            }
        }
    }

    return numIslands;
}

// O(V + E) Time | O(V) Space
function dfs(grid, row, col, rows, cols) {
    if (row < 0 || col < 0 || row >= rows || col >= cols || grid[row][col] === '0') {
        return;
    }
    
    grid[row][col] = '0';

    dfs(grid, row - 1, col, rows, cols); 
    dfs(grid, row + 1, col, rows, cols); 
    dfs(grid, row, col - 1, rows, cols); 
    dfs(grid, row, col + 1, rows, cols); 
}
