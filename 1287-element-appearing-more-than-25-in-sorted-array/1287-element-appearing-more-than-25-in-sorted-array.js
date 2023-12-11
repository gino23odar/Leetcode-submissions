/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function(arr) {
    const quarter = arr.length / 4
    const map = {}
    
    for(const item of arr) {
        map[item] = map[item] + 1 || 1
    }
    
    for(const key in map) {
        if(map[key] > quarter) {
            return key
        }
    }
};