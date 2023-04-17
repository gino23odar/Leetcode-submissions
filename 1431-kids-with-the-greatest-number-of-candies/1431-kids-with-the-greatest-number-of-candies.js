/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let max = Math.max(...candies), res = [];
    for(let i = 0; i < candies.length; i++){
        if((candies[i] + extraCandies) >= max){
            res.push(true);
        } else {
            res.push(false);
        }
    }
    return res;
};