/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if(nums.length == 0) return 0;
    
    let set = new Set(nums);
    let count = 0;
    
    for(let num of set){
        if(set.has(num - 1)) continue;
        
        let cur = num;
        let max = 1;
        
        while(set.has(cur + 1)){
            cur++;
            max++;
        }
        count = Math.max(count, max);
    }
    return count;
};