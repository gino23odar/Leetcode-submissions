/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function(cardPoints, k) {
    let totalP = 0;
    for(let i = 0; i < k; i++){
        totalP += cardPoints[i];
    }
    
    let ans = totalP;
    for(let i = k - 1, j = cardPoints.length - 1; i >= 0; i--, j--){
        totalP += cardPoints[j] - cardPoints[i];
        ans = Math.max(ans, totalP);
    }
    
    return ans;
};