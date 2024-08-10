/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let map = new Map();
    
    for(let i = 0; i < jewels.length; i++){
        map.set(jewels[i], 1)
    }
    
    let ans = 0;
    
    for(let i = 0; i < stones.length; i++){
        if(map.get(stones[i])) ans++
    }
    return ans
};