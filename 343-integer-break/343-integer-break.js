/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
    if(n == 2) return 1;
    if(n == 3) return 2;
    if(n == 4) return 4;
    
    let count = n/3 | 0;
    
    let multiplier = n%3;
    
    if(!multiplier) return 3 ** count;
    
    if(multiplier == 1){
        count--;
        multiplier = 2 * 2;
    }
    return 3 ** count * multiplier;
};