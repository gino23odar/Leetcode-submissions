/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    let dp = Array(amount + 1).fill(amount + 1);
    
    if(amount < 0) return -1;
    if(amount === 0) return 0;
    
    dp[0] = 0;
    
    for(let i = 1; i <= amount; i++){
        for(let j = 0; j < coins.length; j++){
            if(i >= coins[j]) dp[i] = Math.min(dp[i], dp[i - coins[j]] +1);
        }
    }
    console.log(dp);
    return dp[amount] > amount ? -1 :dp[amount];
};