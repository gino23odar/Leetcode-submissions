/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let res = -1;
    let map = new Map();
    
    for(let i = 0; i < s.length; i++){
        map.set(s[i], map.get(s[i])+1 || 1)    
    }
    //console.log(map)
    for(let i = 0; i < s.length; i++){
        if(map.get(s[i]) == 1){
            res = i;
            break
        }
    }
    return res
};