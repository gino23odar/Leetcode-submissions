/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let res = [0];
    let max = 0;
    for(let i = 0; i < gain.length; i++){
        let newH = res[i] + gain[i];
        res.push(newH);
        if(newH > max) max = newH;
    }
    return max;
};