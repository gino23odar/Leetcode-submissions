/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {
    let concat1 = '', concat2 = '';
    for(let i = 0; i < word1.length; i++){
        concat1 += word1[i];
    }
    for(let i = 0; i < word2.length; i++){
        concat2 += word2[i];
    }
    return concat1 == concat2;
};