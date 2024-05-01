/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    let index = word.indexOf(ch);
    if(!index) return word
    return word.split('').slice(0,index+1).reverse().join('') + word.split('').slice(index+1,word.length).join('')
};