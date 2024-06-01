/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function(s) {
    let scores = [];
    for(let i = 0; i < s.length-1; i++){
        scores.push(Math.abs(s.charCodeAt(i) - s.charCodeAt(i+1)))
    }
    return scores.reduce((acc,val) => val + acc, 0)
};