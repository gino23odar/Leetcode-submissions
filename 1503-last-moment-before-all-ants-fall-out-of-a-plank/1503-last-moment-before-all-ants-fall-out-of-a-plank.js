/**
 * @param {number} n
 * @param {number[]} left
 * @param {number[]} right
 * @return {number}
 */
var getLastMoment = function(n, left, right) {
    let max = 0
    for(let ant of left){
        max = Math.max(ant,max)
    }
    for(let ant of right){
        max = Math.max(n-ant,max)
    }
    return max
};