/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const f = (nums,k) => {
    if(k < 0) return 0
    let counter = 0
    let l = 0 
    let r = 0
    let sum = 0
    while(r < nums.length){
        sum += nums[r]%2 !== 0 ? 1 : 0 
        if(sum > k){ 
            while(sum > k){
                sum -= nums[l]%2 !== 0? 1 : 0
                l++
            }
        }
        counter += r-l+1 
        r++ 
    }
    return counter
};
var numberOfSubarrays = function(nums, k) {
    return f(nums,k) - f(nums,k-1)
}