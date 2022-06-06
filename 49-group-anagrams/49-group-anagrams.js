/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    var ans = {}, str = '';
    for(var i = 0; i < strs.length; i++){
        str = Array.from(strs[i]).sort().join('');
        if(!ans[str]) ans[str] = [];
        ans[str].push(strs[i]);
    }
    return Object.values(ans);
};
