/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    if(s2.length < s1.length){
        return false;
    }
    
    let mapS1 = new Array(26).fill(0);
    let mapS2 = new Array(26).fill(0);
    
    for(let i = 0; i < s1.length; i++){
        mapS1[s1.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        mapS2[s2.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    }
    let count = 0;
    for(let i = 0; i < 26; i++){
        if(mapS1[i] == mapS2[i]){
            count++;
        }
    }
    for(let i = 0; i < s2.length - s1.length; i++){
        if(count == 26){
            return true;
        }
        let r = s2.charCodeAt(i + s1.length) - 'a'.charCodeAt(0);
        let l = s2.charCodeAt(i) - 'a'.charCodeAt(0);
        
        mapS2[r]++;
        
        if(mapS2[r] == mapS1[r]){
            count++;
        } else if (mapS2[r] == mapS1[r] + 1){
            count--;
        }
        
        mapS2[l]--;
        
        if(mapS2[l] == mapS1[l]){
            count++;
        } else if(mapS2[l] == mapS1[l] - 1){
            count--;
        }
    }
    return count == 26;
    
};