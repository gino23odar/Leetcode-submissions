/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSquareStreak = function(nums) {
    let map = new Map();
    let mlen = -1;
    
    nums.sort((a,b) => a - b);
    
    for(let num of nums){
        map.set(num, map.get(num)+1 || 1);
    }
    
    const sq = (num) =>{
        let ans = 1;
        num *= num;
        while(map.get(num)){
            ans++;
            num *= num;
        }
        return ans == 1? -1: ans;
    }
    
    for(let num of nums){
        mlen = Math.max(sq(num), mlen)
    }
    return mlen
};