/**
 * @param {string} word
 * @return {number}
 */
var minimumPushes = function(word) {
    let freq = new Array(26).fill(0)
    
    for(let i = 0; i < word.length; i++){
        freq[word.charCodeAt(i)-97]++
    }
    freq.sort((a,b) => b - a)
    
    let ans = 0;
    for(let i = 0; i < freq.length; i++){
        if(freq[i] == 0) break;
        let check = Math.floor(i / 8)+1;

        ans += freq[i] * check
    }
    return ans
};