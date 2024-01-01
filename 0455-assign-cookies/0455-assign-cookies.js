/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    if(g.length == 0 || s.length == 0) return 0
    
    g.sort((a,b) => b - a);
    s.sort((a,b) => b - a);
    
    let i = 0, j = 0;
    
    while(i < g.length){
        if(s[j] >= g[i]) j++
        i++
    }
    
    return j
};