/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function(arr, k, x) {
    let low = 0, hi = arr.length - k;
    while(low < hi) {
        let mid = Math.floor((low + hi) / 2);
        if(x-arr[mid] > arr[mid + k] - x) {
            low = mid+1;
        } else {
            hi = mid;
        }
    }
    return arr.slice(low, low + k);
};