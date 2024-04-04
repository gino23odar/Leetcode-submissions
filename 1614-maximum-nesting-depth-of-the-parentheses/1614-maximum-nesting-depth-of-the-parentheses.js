/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let maxDepth = 0;
    let stack = [];
    
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (char === "(") {
            stack.push(char)
            maxDepth = Math.max(maxDepth, stack.length)
        }
        
        if (char === ")") {
            stack.pop()
        }
    }
    
    return maxDepth;
};