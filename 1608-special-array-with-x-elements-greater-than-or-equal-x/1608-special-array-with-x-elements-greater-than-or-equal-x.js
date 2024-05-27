/**
 * @param {number[]} nums
 * @return {number}
 */
var specialArray = function(nums) {
    nums.sort((a,b) => a - b);
    let idx = 0;
    const isSpecial = (num) =>{
        let count = 0;
        for(let i = nums.length-1; i >= 0; i--){
            if(nums[i] >= num){
                count++
            } else {
                break;
            }
        }
        return count
    }
    
    for(let i = 0; i <= nums.length; i++){
        let val = isSpecial(i);
        if(val == i) return i
    }
    return -1
};