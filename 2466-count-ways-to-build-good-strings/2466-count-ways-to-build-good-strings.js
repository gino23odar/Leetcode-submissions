/**
 * @param {number} low
 * @param {number} high
 * @param {number} zero
 * @param {number} one
 * @return {number}
 */
var countGoodStrings = function(low, high, zero, one) {
    let res = 0;
    let dp = new Array(high + 1).fill(0);
    dp[0] = 1;

    for(let i = 1; i <= high; i++){
        if(i - zero >= 0){
            dp[i] = (dp[i] + dp[i - zero]) % 1000000007;
        }
        if(i-one >= 0){
            dp[i] = (dp[i] + dp[i - one]) % 1000000007;
        }
    }

    for(let i = low; i <= high; i++){
        res += dp[i] % 1000000007;
    }

    res = res % 1000000007;

    return res;    
};