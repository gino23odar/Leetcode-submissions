/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    //I dont want to loop through 2 pointers one index at the time so ...hashtable?
    let map = new Map;
    
    for(let i = 0; i < numbers.length; i++){
        let missing = target - numbers[i];
        if(map.has(missing)){
            return [map.get(missing), i+1];
        }
        map.set(numbers[i], i+1);
    }
};