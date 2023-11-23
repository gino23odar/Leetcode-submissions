/**
 * @param {number[]} nums
 * @param {number[]} l
 * @param {number[]} r
 * @return {boolean[]}
 */
var checkArithmeticSubarrays = function(nums, l, r) {
    let ans = [];
    
    const isArithmetic = (arr) =>{
        arr.sort((a,b) => a - b);
        let diff = arr[1] - arr[0];
        let res = true;
        for(let i = 2; i < arr.length; i++){
            if(arr[i] - arr[i-1] != diff){
                res = false;
            }
        }
        return res;
    }
    
    for(let i = 0; i < l.length; i++){
        let arr = nums.slice();
        let start = l[i];
        let end = r[i];
        let test = arr.slice(start, end+1);
        ans.push(isArithmetic(test))
    }
    return ans
};