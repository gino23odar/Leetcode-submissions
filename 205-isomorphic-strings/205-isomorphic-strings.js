/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let x = {}, y = {};
    
    for(let i = 0; i < s.length; i++){
        if(!x[s[i]] && !y[t[i]]){
            x[s[i]] = t[i];
            y[t[i]] = s[i];
        } else if(x[s[i]] !== t[i] || y[t[i]] !== s[i]){
            return false;
        }
    }
    return true;
};