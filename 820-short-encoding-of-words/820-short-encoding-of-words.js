/**
 * @param {string[]} words
 * @return {number}
 */
var minimumLengthEncoding = function(words) {
    const hashed = new Set(words);
    for(let word of words) {
        for(let i = 1; i < word.length; i++) {
            const suffix = word.slice(i);
            if(hashed.has(suffix)) {
                hashed.delete(suffix);
            }
        }
    }
    let ans = 0;
    hashed.forEach((i) => {ans += i.length + 1});
    return ans;
};