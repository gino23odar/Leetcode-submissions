/**
 * @param {number[]} arr
 * @return {number}
 */
var countTriplets = function(arr) {
    let xors = 0;
    for(let i = 0; i < arr.length; i++){
        let cur = arr[i];
        for(let j = i+1; j < arr.length; j++){
            cur ^= arr[j]
            if(cur == 0){
                xors += j - i
            }
        }
    }
    return xors
};