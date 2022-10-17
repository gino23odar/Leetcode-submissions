/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    const map = new Map();
    let count = 0;
    for(let i = 0; i < sentence.length; i++){
        if(!map.has(sentence[i])){
            map.set(sentence[i], 1);
            count++;
        }
        if(count > 25) return true;
    }
    return false;
};