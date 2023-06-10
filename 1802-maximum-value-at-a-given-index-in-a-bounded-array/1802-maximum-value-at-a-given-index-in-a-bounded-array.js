/**
 * @param {number} n
 * @param {number} index
 * @param {number} maxSum
 * @return {number}
 */
var maxValue = function(n, index, maxSum) {
    let min = Math.floor(maxSum/n), max = maxSum;
    const getSum = (val, len) =>{
        if(len < val){
            return len * (val + val - len + 1) / 2;
        }
        return val * (val + 1) / 2 + (len - val)
    }
    const checkSum = (val) =>{
        let left = getSum(val, index + 1)
        let right = getSum(val, n - index)
        return maxSum >= left + right - val 
    }
    while(min <= max){
        let mid = (min + max) >> 1;
        checkSum(mid) ? min =  mid + 1 : max = mid - 1
    }
    return max
};