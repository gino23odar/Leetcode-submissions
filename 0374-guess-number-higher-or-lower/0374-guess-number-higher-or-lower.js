/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    let min = 1, max = n;
    if(max == 1) return 1;
    
    while(min <= max){
        let center = Math.floor((min+max)/2);
        let attempt = guess(center);
        if(attempt == -1){
            max = center - 1;
        } else if ( attempt == 1){
            min = center + 1;
        } else {
            return center;
        }
    }
};