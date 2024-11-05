/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    if(nums.length < 2) return nums[0];
    let l = 0;
    let r = nums.length;
    
    while(l <= r){
        let mid = l + Math.floor((r-l)/2);
        if(mid == 0 && nums[0] < nums[nums.length-1]) return nums[0];
        if(nums[mid-1] > nums[mid]){
            return nums[mid];
        } else if(nums[mid] > nums[nums.length-1]){
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }
};