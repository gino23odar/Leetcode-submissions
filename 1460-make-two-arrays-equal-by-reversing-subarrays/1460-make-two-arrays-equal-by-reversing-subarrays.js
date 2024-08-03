/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function(target, arr) {
    target.sort((a,b) => b - a)
    arr.sort((a,b) => b - a)
    
    for(let i = 0; i < target.length; i++){
        if(target[i] != arr[i]) return false
    }
    return true
};