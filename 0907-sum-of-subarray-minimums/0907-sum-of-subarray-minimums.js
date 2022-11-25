/**
 * @param {number[]} arr
 * @return {number}
 */
var sumSubarrayMins = function(arr) {
    let solution = 0;
    
    for(let i = 0; i < arr.length; i++){
        let curMin = Infinity;
        for(let j = i; j < arr.length; j++){
            curMin = Math.min(curMin, arr[j]);
            solution += curMin
        }
    }

    return solution % (10**9+7)
};