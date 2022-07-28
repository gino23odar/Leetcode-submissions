/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;
    const map1 = new Map();
    const map2 = new Map();
    
    s.split('').forEach((c)=>{
      map1[c] =  map1[c] + 1 || 1; 
    });
    
    
    t.split('').forEach((c)=>{
      map2[c] =  map2[c] + 1 || 1; 
    });
    

    for(let item in map1){
        if(map1[item] !== map2[item]) return false;
    }
    
    return true
};