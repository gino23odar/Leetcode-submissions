/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let c = Array(3).fill(0);
    for(let i = 0; i < nums.length; i++){
        c[nums[i]]++
    }
    //console.log(c)
    let idx = 0;
    for(let i = 0; i < c.length; i++){
        let sub = c[i];
        for(let j = 0; j < sub; j++){
            nums[idx] = i
            idx++
        }
    }
    
    return nums
};