/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {
    let or = [];
    let dt = [];
    
    for(let i = 0; i < paths.length; i++){
        or.push(paths[i][0]);
        dt.push(paths[i][1]);
    }
    
    let ans = dt.filter(city => !or.includes(city))[0];
    
    return ans
};