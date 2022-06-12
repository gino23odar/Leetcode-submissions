/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumUniqueSubarray = function(nums) {
    let map = new Int8Array(10001), sum = 0, high = 0;
    
    for(let left = 0, right = 0; right < nums.length; right++){
        map[nums[right]]++;
        sum += nums[right];
        
        while(map[nums[right]] > 1){
            map[nums[left]]--;
            sum -= nums[left++];
        }
        high = Math.max(high, sum);
    }
    return high;
};