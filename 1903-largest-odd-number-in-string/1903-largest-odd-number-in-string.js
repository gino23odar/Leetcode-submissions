/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function(num) {
    if(num[num.length-1] % 2 == 1) return num;
    let largest = num[0];
    for(let i = num.length-1; i > 0; i--){
        if(num[i] % 2 == 1){
            largest = num.slice(0,i+1);
            break;
        }
    }
    if(largest.length == 1){
        largest = num[0] % 2 == 1? largest: '';
    }
    return largest
};