var floodFill = function(image, sr, sc, color) {
    
    let rows = image.length;
    let cols = image[0].length;
    let originalColor = image[sr][sc];

    if (originalColor === color) return image;

    const dfs = (grid, row, col) => {
        if (row < 0 || col < 0 || row >= rows || col >= cols || grid[row][col] !== originalColor) {
            return;
        }

        grid[row][col] = color;

        dfs(grid, row + 1, col);
        dfs(grid, row - 1, col);
        dfs(grid, row, col + 1);
        dfs(grid, row, col - 1);
    };

    dfs(image, sr, sc);

    return image;
};
