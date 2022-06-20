/**
 * @param {string[]} words
 * @return {number}
 */
var minimumLengthEncoding = function(words) {
    let hashed = new Set(words), ans = 0;
    for(let word of hashed){
        for(let i = 1; i < word.length; i++){
            let tmp = word.slice(i);
            words.includes(tmp) && hashed.delete(tmp);
        }
    }
    hashed.forEach(j => ans += j.length + 1);
    
    return ans;
};