/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(t.length < s.length) return false;
    if(s.length < t.length) return false;
    
    let arr1 = s.split('');
    let arr2 = t.split('');
    arr1.sort();
    arr2.sort();
    
    for(let i = 0; i < arr1.length; i++){
        if(arr1[i] !== arr2[i]){
            return false
        }
    }
    return true;
};