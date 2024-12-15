class Solution {
    public int fib(int n) {
        int[] dp = new int[n+1];
        
        return helper(dp, n);
    }
    
    public int helper(int[] dp, int n){
        if (n == 0) return 0;
        if (n == 1) return 1;
        if(dp[n] != 0) return dp[n];
        
        dp[n] = helper(dp, n-1) + helper(dp, n-2);
        return dp[n];
    }
}