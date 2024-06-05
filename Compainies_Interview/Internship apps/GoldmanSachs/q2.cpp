int countPalindromes(string s)
{
    int n = (int)s.length(), count = n;
    vector<vector<bool>> dp(n, vector<bool>(n, false));
    for (int i = 0; i < n; ++i)
        dp[i][i] = true; // diag: all length 1 substrings are palindromic
    for (int col = 1; col < n; ++col)
    { // go col by col, walk row value down to diag.
        for (int row = 0; row < col; ++row)
        {
            if ((row == col - 1 && s[row] == s[col]) || // length 2, check if 2 char are same
                (s[row] == s[col] && dp[row + 1][col - 1]))
            { // length > 2, find find in dp matrix
                dp[row][col] = true;
                ++count;
            }
        }
    }
    return count;
}