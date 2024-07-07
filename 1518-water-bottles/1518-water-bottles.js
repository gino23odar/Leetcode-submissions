/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function(numBottles, numExchange) {
    let rem = numBottles;
    let sum = numBottles;
    let rest = 0;
    
    do{
        rest = rem % numExchange
        rem = Math.floor(rem/numExchange)
        sum += rem;
        rem += rest
        
        //console.log(rem)
        //console.log(rest)
    } while(rem >= numExchange);
    return sum
};