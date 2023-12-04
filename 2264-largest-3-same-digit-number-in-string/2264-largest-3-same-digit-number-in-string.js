/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function(num) {
    let maxIntegers = ['999', '888', '777','666','555','444','333','222','111','000'];
    let ans = '';
    
    for(let i = 0; i < maxIntegers.length; i++){
        if(num.includes(maxIntegers[i])){
            ans = maxIntegers[i];
            break;
        }
    }
    return ans
};