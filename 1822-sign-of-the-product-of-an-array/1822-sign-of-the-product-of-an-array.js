/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
    if(nums.includes(0)){
        return 0;
    }
    let product = nums.reduce((a,b) => a * b);
    return product < 0 ? -1 : product > 0 ? 1 : 0;
};