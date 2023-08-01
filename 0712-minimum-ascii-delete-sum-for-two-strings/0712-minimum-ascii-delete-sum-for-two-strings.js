/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
var minimumDeleteSum = function(s1, s2) {
    const dp = new Array(s2.length + 1);
    for(let i = 0; i < dp.length; i++) {
        dp[i] = new Array(s1.length+1).fill(0)
    }
    
    for(let row = 1; row < dp.length; row++) {
        dp[row][0] = s2.charCodeAt(row-1) + dp[row-1][0];
    } 
    
    for(let col = 1; col < dp[0].length; col++) {
        dp[0][col] = s1.charCodeAt(col-1) + dp[0][col-1];
    } 

    for(let i = 1; i < dp.length; i++) {
        for(let j = 1; j < dp[i].length; j++) {
            if(s1[j-1] === s2[i-1]) {
                dp[i][j] = dp[i-1][j-1];
            } else if(s1[j-1] !== s2[i-1]) {
                dp[i][j] = Math.min(dp[i][j-1] + s1.charCodeAt(j-1), dp[i-1][j] + s2.charCodeAt(i-1));
            }   
        }    
    }

    return dp[dp.length-1][dp[0].length-1];
};