/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let map = new Map();
    for(let i = 0; i < s.length; i++){
        if(map[s[i]]){
            map[s[i]] += 1;
        } else {
            map[s[i]] = 1;
        }
    }
    
    for(let i = 0; i < t.length; i++){
        if(map[t[i]] > 0){
            map[t[i]] -= 1;
        } else {
            return t[i]
        }
    }
};