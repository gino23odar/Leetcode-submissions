/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {
    let map = {}, ans = [], start = 0, end = 0;
    for(let i = 0; i < s.length; i++){
        map[s[i]] = i;
    }
    
    for(let i = 0; i < s.length; i++){
        end = Math.max(end, map[s[i]]);
        if(i === end){
            ans.push(i - start + 1);
            start = i + 1;
        }
    }
    return ans;
};