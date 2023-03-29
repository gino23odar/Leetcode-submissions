/**
 * @param {number[]} satisfaction
 * @return {number}
 */
var maxSatisfaction = function(satisfaction) {
    let cache = {};
    satisfaction.sort((a, b) => a - b);
    function dP(index, multiplier, satsifaction, val, cache) {
        let key = index + "-" + multiplier;
        if (index >= satsifaction.length) {
            return 0;
        }
        if (cache[key] != undefined) {
            return cache[key];
        }
        let valIfPicked = (satsifaction[index] * multiplier);
        let ifPicked = valIfPicked + dP(index + 1, multiplier + 1, satsifaction, val + valIfPicked, cache);
        let notPicked = 0 + dP(index + 1, multiplier, satsifaction, val, cache);
        cache[key] = Math.max(ifPicked, notPicked);
        return cache[key];
    }
    let maxCoeff = dP(0, 1, satisfaction, 0, cache);
    return maxCoeff; 
};