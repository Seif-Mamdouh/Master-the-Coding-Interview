var closedIsland = function(grid) {
    
    let rows = grid.length;
    let cols = grid[0].length;

    const dfs = (grid, row, col) => {
        if (row < 0 || col < 0 || row >= rows || col >= cols) {
            return ;
        }

        if(grid[row][col] === 1){
            return true;
        }

        grid[row][col] = 1

        let up = dfs(grid, row - 1, col);
        let down = dfs(grid, row + 1, col);
        let left = dfs(grid, row, col - 1);
        let right = dfs(grid, row, col + 1);

        return up && down && left && right
    };

    let countIslands = 0;

    for(let row = 0; row < rows; row++){
        for(let col = 0; col < cols; col++){
            if (grid[row][col] === 0) {
                if(dfs(grid, row, col)){
                    countIslands += 1;
                }
            }
        }
    }

    return countIslands;

};
