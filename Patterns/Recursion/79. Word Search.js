function exist(board, word) {
    const rows = board.length;
    const cols = board[0].length;
    const visited = new Set();

    function dfs(r, c, index) {
        if (index === word.length) return true;
        if (r < 0 || c < 0 || r >= rows || c >= cols || board[r][c] !== word[index] || visited.has(`${r},${c}`)) return false;

        visited.add(`${r},${c}`);

        const found = dfs(r + 1, c, index + 1) ||
                      dfs(r - 1, c, index + 1) ||
                      dfs(r, c + 1, index + 1) ||
                      dfs(r, c - 1, index + 1);

        visited.delete(`${r},${c}`);

        return found;
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (board[i][j] === word[0] && dfs(i, j, 0)) {
                return true;
            }
        }
    }

    return false;
}
