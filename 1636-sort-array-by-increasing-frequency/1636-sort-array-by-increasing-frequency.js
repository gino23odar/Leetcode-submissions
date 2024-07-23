/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function(nums) {
    let freq = new Map();
    for(let i = 0; i < nums.length; i++){
        freq.set(nums[i], freq.get(nums[i]) + 1 || 1)
    }

    let freqArr = Array.from(freq)
    
    freqArr.sort((a,b) =>{
        if(a[1] !== b[1]){
            return a[1] - b[1]
        }
        return b[0] - a[0]
    })

    let res = [];
    
    for(let [key, val] of freqArr){
        for(let i = 0; i < val; i++){
            res.push(key)
        }
    }
    return res
};