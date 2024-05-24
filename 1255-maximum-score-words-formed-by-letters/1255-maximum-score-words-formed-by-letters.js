/**
 * @param {string[]} words
 * @param {character[]} letters
 * @param {number[]} score
 * @return {number}
 */
var maxScoreWords = function(words, letters, score) {
    let counter = {}
    for(let c of letters) {
        if(!counter[c]) counter[c] = 1;
        else counter[c]++;
    }
    let scores = [];
    for(let w of words) {
        let sc = 0;
        for(let c of w) {
            sc += score[c.charCodeAt() - 'a'.charCodeAt()];
        }
        scores.push(sc);
    }
    
    
    let ans = 0;
    
    const dfs = function(start, total) {
        
        ans = Math.max(ans, total);
        
        for(let i=start; i<words.length; i++) {
            const word = words[i];
            
            let valid = true;
            for(let c of word) {
                valid &= --counter[c] >= 0
            }
            if(valid) {
                dfs(i+1, total+scores[i]);
            }
            
            for(let c of word) {
                ++counter[c];
            }
        }
    }
    
    dfs(0, 0);
    
    return ans;
};