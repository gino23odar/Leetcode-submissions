/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
    const charMap = new Map()
    for (const ch of chars) 
        charMap.set(ch, (charMap.get(ch) ?? 0) + 1)
    let res = 0
    for (const word of words) {
        const temp = new Map()
        for (const ch of word) 
            temp.set(ch, (temp.get(ch) ?? 0) + 1);
        [...temp.keys()].every(key => charMap.has(key) && 
            charMap.get(key) >= temp.get(key)) 
        ? res += word.length
        : null
    }
    return res
};