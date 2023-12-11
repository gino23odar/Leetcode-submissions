/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function(arr) {
    let cur = arr[0];
    let threshold = arr.length/4.0
    let curCount = 1;
    
    for(let i = 1; i < arr.length; i++){
        if(arr[i] == cur){
            curCount++;
            if(curCount > threshold) break
        } else {
            cur = arr[i];
            curCount = 1;
        }
    }
    return cur
};