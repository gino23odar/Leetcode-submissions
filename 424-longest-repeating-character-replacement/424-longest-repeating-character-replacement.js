/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    const letters = {};
    let out = 0, left = 0, freq = 0;
    
    for(let right = 0; right < s.length; right++){
        const letter = s[right];
        letters[letter] = 1 + (letters[letter] || 0);
        freq = Math.max(freq, letters[letter]);
        
        while((right - left + 1) - freq > k){
            letters[s[left]] -= 1;
            left++;
        }
        out = Math.max(out, right - left + 1);
    }
    return out;
};