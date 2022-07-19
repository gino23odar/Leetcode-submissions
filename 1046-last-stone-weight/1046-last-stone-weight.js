/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    let len = stones.length;
    while(len > 1){
        stones.sort((a,b) => a - b);
        stones[len-2] = stones[len-1] - stones[len-2];
        len--;
    }
    return stones[0];
};