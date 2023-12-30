/**
 * @param {string[]} words
 * @return {boolean}
 */
var makeEqual = function(words) {
    let len = words.length;
    let count = new Array(26).fill(0);
    
    for(let word of words){
        for(let char of word){
            count[char.charCodeAt(0) - 97]++
        }
    }
    
    for(let char of count){
        if(char % len !== 0) return false
    }
    return true
};