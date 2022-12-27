/**
 * @param {number[]} capacity
 * @param {number[]} rocks
 * @param {number} additionalRocks
 * @return {number}
 */
var maximumBags = function(capacity, rocks, additionalRocks) {
    let needed = [];
    
    let i = 0;
    while (i < capacity.length) {
        needed[i] = capacity[i] - rocks[i]
        i++;
    }
    needed.sort((a,b) => a - b)
    
    for (let i = 0; i < needed.length;i++) {        
        if (needed[i] > additionalRocks) {
            break
        }
        additionalRocks = additionalRocks - needed[i]
        needed[i] = 0;
    }
    let count = 0
    for (let char of needed) {
        if (char === 0) count++
    }
    
    return count
};