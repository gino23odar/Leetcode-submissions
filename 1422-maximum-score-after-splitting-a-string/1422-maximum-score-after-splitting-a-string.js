/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function(s) {
    let prefix = Array(s.length).fill(0);
    if(s[0] == 0) prefix[0] = 1;
    
    for(let i = 1; i < s.length; i++){
        if(s[i] == 0){
            prefix[i] = prefix[i-1] + 1
        } else {
            prefix[i] = prefix[i-1]
        }
    }
    if(s[s.length-1] == 1) prefix[s.length-1]++;
    if(s[s.length-1] == 0) prefix[s.length-1]--;
    
    for(let i = s.length -2; i >= 0; i--){
        if(s[i] == 1) prefix[i] = prefix[i+1] + 1;
        if(s[i] == 0) prefix[i] = prefix[i+1] - 1;
    }
    return Math.max(...prefix.slice(1))
};