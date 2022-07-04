/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    if(ratings == null || ratings.length == 0) return 0;
    
    let candies = Array(ratings.length).fill(0);
    candies[0] = 1;
    
    for(let i = 1; i < ratings.length; i++){
        if(ratings[i] > ratings[i-1]){
            candies[i] = candies[i-1] + 1;
        } else {
            candies[i] = 1;
        }
    }
    let sum = candies[ratings.length - 1];
    for(let i = ratings.length - 2; i >= 0; i--){
        if(ratings[i] > ratings[i+1]) candies[i] = Math.max(candies[i+1]+1, candies[i]);
        sum += candies[i];
    }
    return sum;
};