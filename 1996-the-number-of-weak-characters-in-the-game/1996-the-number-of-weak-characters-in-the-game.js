/**
 * @param {number[][]} properties
 * @return {number}
 */
var numberOfWeakCharacters = function(properties) {
    let max = 0, res = 0;
    properties.sort((x, y) => x[0] == y[0] ? x[1] - y[1] : y[0] - x[0]);
    //console.log(properties)
    for(let [,d] of properties) d < max ?res++ :max = d;
    return res;
};