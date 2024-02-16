/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findLeastNumOfUniqueInts = function(arr, k) {
    let map = new Map();
    for(let i = 0; i < arr.length; i++){
        map.set(arr[i], map.get(arr[i])+1||1)
    }
    let resArr = [];
    for(const [key,val] of map){
        resArr.push([key,val]);
    }
    resArr.sort((a,b) => a[1] - b[1]);

    let left = map.size;
    let i = 0;
    while(k > 0){
        if((k - resArr[i][1]) >= 0){
            k -= resArr[i][1];
            left--;
        } else {
            k = 0; 
        }
        i++
    }
    return left
};