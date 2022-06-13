/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    if(s[0] === '0') return 0;
    
    const count = Array(s.length+1).fill(0);
    count[0] = 1;
    count[1] = 1;
    
    for(let i = 2; i <= s.length; i++){
        const oneD = s.slice(i-1, i);
        const twoD = s.slice(i-2, i);
        
        if(oneD > 0) count[i] = count[i-1];
        if(twoD >= 10 && twoD <= 26) count[i] += count[i-2];
    }
    return count[s.length];
};