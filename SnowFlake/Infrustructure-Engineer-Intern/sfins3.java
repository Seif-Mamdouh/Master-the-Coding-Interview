import java.util.*;

class HelloWorld {

    public static void main(String[] args) {
        // TODO Auto-generated method stub
        System.out.println(solve("rrlrlr", 6, 1, 3));
    }

    static int MOD = 1000000007;

    public static int solve(String s2, int n, int x, int y) {

        // Creating array of string length
        char[] s = new char[s2.length()];
        // Copy character by character into array
        for (int i = 0; i < s2.length(); i++) {
            s[i] = s2.charAt(i);
        }

        int[] prevSame = new int[s.length];
        int idxL = -1;
        int idxR = -1;
        for (int i = 0; i < prevSame.length; i++) {
            if (s[i] == 'l') {
                prevSame[i] = idxL;
                idxL = i;
            } else {
                prevSame[i] = idxR;
                idxR = i;
            }
        }

        // dp[i][j] is number of distinct subsequnces of length i to end up at j
        long[][] dp = new long[s.length + 1][n + 1];
        dp[0][x] = 1;
        for (int i = 1; i <= s.length; i++) {
            for (int j = 0; j <= n; j++) {
                dp[i][j] = dp[i - 1][j];
                if (s[i - 1] == 'l') {
                    if (j + 1 <= n)
                        dp[i][j] += dp[i - 1][j + 1];
                    if (j + 1 <= n && prevSame[i - 1] >= 0)
                        dp[i][j] -= dp[prevSame[i - 1] + 1 - 1][j + 1];
                } else {
                    if (j - 1 >= 0)
                        dp[i][j] += dp[i - 1][j - 1];
                    if (j - 1 >= 0 && prevSame[i - 1] >= 0)
                        dp[i][j] -= dp[prevSame[i - 1] + 1 - 1][j - 1];
                }
                dp[i][j] = (dp[i][j] + MOD) % MOD;
            }
        }
        return (int) dp[s.length][y];
    }
}
