/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    let slen = s.length, wlen = words.length, indWlen = (words[0] || '').length;
    if(!slen || !wlen || !indWlen) return [];
    
    let count = 0, tmp = '', map1 = {}, map2 = {}, ans = [];
    
    for(let i = 0; i < wlen; i++){
        map1[words[i]] = (map1[words[i]] || 0) + 1;
    }
    
    out: for(let j = 0; j <= slen - (wlen * indWlen); j++){
        map2 = {};
        count = 0;
        while(count < wlen){
            tmp = s.substr(j + (count * indWlen), indWlen);
            if(map1[tmp] === undefined || map1[tmp] === map2[tmp]) continue out;
            map2[tmp] = (map2[tmp] || 0) + 1;
            count++;
        }
        ans.push(j);
    }
    return ans;
};