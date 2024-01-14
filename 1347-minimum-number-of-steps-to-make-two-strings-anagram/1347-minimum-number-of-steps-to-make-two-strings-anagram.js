/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function(s, t) {
    let mapS = new Map();
    
    for(let i = 0; i < s.length; i++){
        if(mapS.get(s[i])){
            mapS.set(s[i], mapS.get(s[i])+1)
        } else {
            mapS.set(s[i], 1)
        }
    }
    
    let count = 0;
    
    for(let i = 0; i < t.length; i++){
        if(mapS.get(t[i]) && mapS.get(t[i]) > 0){
            mapS.set(t[i], mapS.get(t[i]) - 1)
        } else {
            count++
        }
    }
    return count
};