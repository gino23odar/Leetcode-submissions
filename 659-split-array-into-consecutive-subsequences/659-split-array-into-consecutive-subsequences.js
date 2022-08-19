/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossible = function(nums) {
    let count = {}, rem = {};
    
    for(let i of nums){
        count[i] = count[i] ?count[i] +1 :1;
    }
    
    for(let i of nums){
        if(count[i] === 0){
            continue;
        } else if(rem[i] > 0){
            rem[i] -= 1;
            rem[i+1] = rem[i+1] ?rem[i+1] + 1 :1;
        } else if(count[i+1] > 0 && count[i+2] > 0){
            count[i+1] -= 1;
            count[i+2] -= 1;
            rem[i+3] = rem[i+3] ?rem[i+3] + 1 :1;
        } else {
            return false;
        }
        count[i] -= 1;
    }
    return true;
};