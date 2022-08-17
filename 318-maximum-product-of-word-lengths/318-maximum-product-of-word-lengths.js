/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function(words) {
    words.sort((a,b) => b.length - a.length);
    let high = 0;
    let bitSets = new Uint32Array(words.length);
    for(let i = 0; i < words.length; i++){
        let word = words[i], len = word.length, bitSet = 0;
        if(len * words[0].length < high){
            return high;
        }
        for(let j = 0; j < len; j++){
            bitSet |= 1 << (word.charCodeAt(j) - 97);
        }
        for(let j = 0; j < i; j++){
            if((bitSets[j] & bitSet) === 0) high = Math.max(high, len * words[j].length);
        }
        bitSets[i] = bitSet;
    }
    return high;
};