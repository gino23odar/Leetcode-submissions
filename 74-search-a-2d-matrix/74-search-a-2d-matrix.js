/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let arr = [];
    for(let elem of matrix){
        arr.push(...elem);
    }
        
    let left = 0, right = arr.length;
    
    if(target > arr[right - 1] || target < arr[0]) return false;
    
    while(left <= right){
        let center = Math.floor((left + right)/2);
        if(arr[center] === target){
            return true;
        }else if(arr[center] > target){
            right = center - 1 ;
        }else if(arr[center] < target){
            left = center + 1;
        }
    }
    return false;
};