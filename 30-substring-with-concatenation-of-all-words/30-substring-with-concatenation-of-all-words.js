/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    let ans = [];
    let totLenWords = words.reduce((total, word) => (total += word.length), 0);
    
    for(let i = 0; i <= s.length - totLenWords; i++){
        if(containsAllWords(s.substring(i), words.slice())){
            ans.push(i);
        }
    }
    return ans;
};

const containsAllWords = (string, words) =>{
    if(!words.length) return true;
    for(let i = 0; i < words.length; i++){
        const targetLen = words[i].length;
        if(string.substring(0, targetLen) === words[i]){
            words.splice(i, 1);
            return containsAllWords(string.substring(targetLen), words);
        }
    }
    return false
}