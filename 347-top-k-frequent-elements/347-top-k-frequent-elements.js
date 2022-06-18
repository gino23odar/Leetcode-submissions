/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let map = new Map(), out = [];
    for (let i = 0; i <= nums.length; i++){
        out.push([]);
    }
    //console.log(out.length);
    for (let num of nums) {
        if (map.has(num)) {
            map.set(num, map.get(num) + 1);
        } else {
            map.set(num, 1);
        }
    } 
    for(let [key, value] of map){
        out[value].push(key);
    }
    
    let ans = [];
    for(let i = out.length-1; i > 0 && ans.length < k; i--){
        if(out[i] !== null) ans.push(...out[i]);
    }
    return ans;
};