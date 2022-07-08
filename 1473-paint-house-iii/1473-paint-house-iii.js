/**
 * @param {number[]} houses
 * @param {number[][]} cost
 * @param {number} m
 * @param {number} n
 * @param {number} target
 * @return {number}
 */
var minCost = function(houses, cost, m, n, target) {
    const dp = Array(m).fill(null).map(() => Array(target).fill(null).map(() => Array(n+1).fill(0)));
    
    function dfs(i, j, k){
        if(i === m && j === 0){
            return 0;
        } else if(j < 0 || m - i < j || (i === m && j > 0)){
            return Infinity;
        } else if(k > -1 && dp[i][j][k]){
            return dp[i][j][k];
        } else {
            let ans = Infinity;
            if(houses[i]){
                let tmp = houses[i] !== k ?1 :0;
                ans = dfs(i+1, j - tmp, houses[i]);
            } else {
                for(let a = 1; a <= n; a++){
                    let tmp = a !== k ?1 :0;
                    ans = Math.min(ans, cost[i][a-1] + dfs(i+1, j-tmp, a));
                }
            }
            if(k > -1) dp[i][j][k] = ans;
            return ans;
        }
    }
    let result = dfs(0, target, -1);
    return result === Infinity ?-1 :result;
};