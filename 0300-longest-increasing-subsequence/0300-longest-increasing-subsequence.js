/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    const checkPos = (arr, x) =>{
        let lo = 0;
        let hi = arr.length;
        while(lo < hi){
            let mid = Math.floor((lo+hi)/2)
            if(arr[mid] < x){
                lo = mid+1
            } else {
                hi = mid
            }
        }
        return lo
    }
    
    let seq = [];
    for(let num of nums){
        let i = checkPos(seq, num);
        if(i == seq.length){
            seq.push(num)
        } else {
            seq[i] = num;
        }
    }
    return seq.length
};