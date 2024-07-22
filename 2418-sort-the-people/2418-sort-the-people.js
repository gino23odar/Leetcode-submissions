/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
    let pair = [];
    for(let i = 0; i < names.length; i++){
        pair.push([names[i], heights[i]])
    }
    
    pair.sort((a,b) => b[1] - a[1])
    
    let ans = [];
    for(let i = 0; i < pair.length; i++){
        ans.push(pair[i][0])
    }
    return ans
};