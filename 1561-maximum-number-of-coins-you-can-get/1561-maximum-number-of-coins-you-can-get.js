/**
 * @param {number[]} piles
 * @return {number}
 */
var maxCoins = function(piles) {
    piles.sort((a,b) => a - b);
    let ans = 0;
    for(let i = 0, j = piles.length-1; i < piles.length/3; i++){
        ans += piles[j-1]
        j -= 2;
    }
    return ans;
};