/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    const morse = [".-","-...","-.-.","-..",".","..-.",
                   "--.","....","..",".---","-.-",".-..",
                   "--","-.","---",".--.","--.-",".-.",
                   "...","-","..-","...-",".--","-..-","-.--","--.."];
    
    const map = new Map(morse.map((v, i) => [String.fromCharCode(97 + i), v]));
    const translated = words.map(word => word.split('').map(c => map.get(c)).join(''));
    return new Set(translated).size;
};