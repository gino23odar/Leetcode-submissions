/**
 * @param {string} s
 * @return {number}
 */
var minimumDeletions = function(s) {
    const countA = [];
    let count = 0;
    for (let i = s.length - 1;  i >= 0; i--) {
        if (s[i] === 'a') {
            count++;
        }
        countA[i] = count;
    }
    const getMin = function(start) {
        if (start >= s.length) {
            return 0;
        }
        if (countA[start] === 0) {
            return 0;
        }
        
        const l = s[start];
        if (l === 'a') {
            return getMin(start + 1);
        } else {
            return Math.min(1 + getMin(start + 1), countA[start]);
        }
    }
    
    return getMin(0);

};