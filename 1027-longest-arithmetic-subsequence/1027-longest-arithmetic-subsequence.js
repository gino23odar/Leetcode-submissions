/**
 * @param {number[]} nums
 * @return {number}
 */
var longestArithSeqLength = function(nums) {
    var count = 0;
    for(var i=0; i<nums.length-1; i++){
        for(var j=i+1; j<nums.length; j++) {
            var last = nums[j];
            var diff = nums[j] - nums[i];
            var curr = 2;
            var k = j;
            while(true) {
                var next = last + diff;
                var index = nums.indexOf(next, k+1);
                if(index == -1){
                    if(curr > count){
                        count = curr;
                    }
                    break;
                }
                else if(index > k){
                    last = next;
                    k = index;
                    curr++;
                }
            }
        }
        if(count > nums.length-i){
            break;
        }
    }
    return count;
};