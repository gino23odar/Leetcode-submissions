/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let tempa=[];
    let final=[];
    function backtrack(tempa,nums){
        if(nums.length===0){
            final.push(tempa.slice());
            return;
        }
        for(let i=0;i<nums.length;i++){
            tempa.push(nums[i]);
            nums.splice(i,1);
            backtrack(tempa,nums,final);
            nums.splice(i,0,tempa.pop());

        }
    }
    backtrack(tempa,nums);
    return final;
};