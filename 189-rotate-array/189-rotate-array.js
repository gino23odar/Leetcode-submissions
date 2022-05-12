/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let i = 0;
    let arrRes = [];
    while(i < nums.length){
        let index = i+k;
        if(index >= nums.length){
            index = index % nums.length;
            arrRes[index] = nums[i];
        }else{
            arrRes[index] = nums[i];
        }      
        i++;
    }
    let j = 0;
    while(j < nums.length){
        nums[j] = arrRes[j];
        j++;
    }
};