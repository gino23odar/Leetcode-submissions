/**
 * @param {number[][]} pairs
 * @return {number}
 */
var findLongestChain = function(pairs) {
    pairs.sort((a,b)=> a[0] - b[0])
    
    let N = pairs.length
    let dp = new Array(N).fill(1)
    
    for(let i =0; i < N; i++){
        for(let j = 0; j < i ; j++){
            if(pairs[j][1] < pairs[i][0]){
                dp[i] = Math.max(dp[i], dp[j]+1)
            }
        }
    }
    

    return Math.max(...dp)
};