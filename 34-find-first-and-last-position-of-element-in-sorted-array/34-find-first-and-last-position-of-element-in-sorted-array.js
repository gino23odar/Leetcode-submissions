/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let index = 0 , result = [-1,-1], flag = false;
    while (index <= nums.length -1){
        if(nums[index] == target){
            if(result[0] == -1) {
                result[0] = index;
                result[1] = index;
                flag = true;
            } else {
                result[1] = index;
            }
        } else if(flag) {
          break;
        } 
      index++;
    }
    return result;
};