/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
    let tmp = new Set();
    let ans = new Set();
    for(let i = 0; i < s.length -9; i++){
        const subset = s.substring(i, i + 10);
        if(tmp.has(subset)){
            ans.add(subset);
        } else {
            tmp.add(subset);
        }
    }
    return  Array.from(ans);
};