/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxResult = function(nums, k) {
    let len = nums.length;
    let queue = [len-1];
    for(let i = len - 2; ~i; i--){
        if(queue[0] - i > k) queue.shift();
        nums[i] += nums[queue[0]];
        while(queue.length && nums[queue[queue.length - 1]] <= nums[i]) queue.pop();
        queue.push(i);
    }
    return nums[0];
};