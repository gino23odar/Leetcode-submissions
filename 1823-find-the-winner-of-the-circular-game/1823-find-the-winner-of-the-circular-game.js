/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findTheWinner = function(n, k) {
    const arr = Array(n).fill(0);
    for(let i = 0; i < n; i++) arr[i] = i+1;
    let index = 0;
    while(arr.length > 1){
        index = (index + k - 1) % arr.length;
        arr.splice(index, 1);
    }
    return arr.length? arr[0] : -1;
};
