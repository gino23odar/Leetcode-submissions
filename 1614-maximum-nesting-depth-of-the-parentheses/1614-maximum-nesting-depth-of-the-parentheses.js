/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let maxDepth = 0;
    let count = 0;
    
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (char === "(") {
            ++count;
            maxDepth = Math.max(maxDepth, count)
        }
        
        if (char === ")") {
            --count
        }
    }
    
    return maxDepth;
};