/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var getWinner = function(arr, k) {
    if(k == 1) return Math.max(arr[0], arr[1]);
    let len = arr.length;
    if(k >= len) return Math.max(...arr);
    
    let ans = 0;
    let count = 0;
    for(let i = 1; i < len; i++){
        if(arr[ans] > arr[i]){
            count++;
            if(count == k) break;
        } else {
            count = 1;
            ans = i;
        }
    }
    return arr[ans]
};