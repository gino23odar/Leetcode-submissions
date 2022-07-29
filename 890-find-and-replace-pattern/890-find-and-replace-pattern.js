/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
var findAndReplacePattern = function(words, pattern) {
    let ans = [], map = new Map();
    const trans = char =>{
        if(!map.has(char)) map.set(char, String.fromCharCode(97 + map.size));
        return map.get(char);
    }
    
    const comp = word =>{
        map.clear();
        for(let i = 0; i < word.length; i++){
            if(trans(word[i]) !== cipher[i]) return;
        }
        ans.push(word);
    }
    
    let cipher = new Array(pattern.length);
    for(let i = 0; i < pattern.length; i++){
        cipher[i] = trans(pattern.charAt(i));
    }
    words.forEach(comp);
    return ans;
};