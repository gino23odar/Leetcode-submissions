/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function(low, high) {
    let dif = high - low + 1;
    const isEven = (n) =>{
        return n % 2 == 0;
    }
    
    if(isEven(dif) || (isEven(low) && isEven(high))){
        return Math.floor(dif/2);
    } else {
        return Math.ceil(dif/2);
    } 
};