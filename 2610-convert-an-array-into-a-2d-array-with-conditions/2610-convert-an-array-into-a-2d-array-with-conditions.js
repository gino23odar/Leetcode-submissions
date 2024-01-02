/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findMatrix = function(nums) {
    let ans=[];
    let obj={}
    for(let num of nums){
        let index = obj[num]||0;
        let arr = ans[index]||[];
        arr.push(num);
        ans[index] = arr;
        obj[num] = index+1
        //console.log(ans, obj)
    }
    return ans
};