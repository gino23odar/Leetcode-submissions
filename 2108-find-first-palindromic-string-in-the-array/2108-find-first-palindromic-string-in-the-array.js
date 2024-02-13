/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    const isPalindromic = (str) =>{
        if( str.split('').reverse().join('') == str){
            return true
        }
        return false
    }
    for(let i = 0; i < words.length; i++){
        if(isPalindromic(words[i])) return words[i]
    }
    return ''
};