/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let count = {};
    for(const letter of s){
        if(count[letter]){
            count[letter]++;  
        } else {
            count[letter] = 1;
        }
    }
    //no order in the object, so loop over s to find the first 1.
    for(let i = 0; i < s.length; i++){
        const sLetter = s[i];
        if(count[sLetter] === 1){
            return i;
        }
    }
    return -1;
};