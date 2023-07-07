/**
 * @param {string} answerKey
 * @param {number} k
 * @return {number}
 */
var maxConsecutiveAnswers = function(answerKey, k) {
    const letters = {};
    let out = 0, left = 0, freq = 0;
    
    for(let right = 0; right < answerKey.length; right++){
        const letter = answerKey[right];
        letters[letter] = 1 + (letters[letter] || 0);
        freq = Math.max(freq, letters[letter]);
        
        while((right - left + 1) - freq > k){
            letters[answerKey[left]] -= 1;
            left++;
        }
        out = Math.max(out, right - left + 1);
    }
    return out;
};