/**
 * @param {string[]} words
 * @return {number}
 */
var longestStrChain = function(words) {
    let wArr = Array.from({length: 17}, _ => new Set());
    
    for(let i = 0; i < words.length; i++){
        wArr[words[i].length].add(words[i]);
    }
    
    let dp = new Map(), longest = 1;
    
    for(let i = 16; i; i--){
        if(!wArr[i-1].size) continue;
        for(let word of wArr[i]){
            let wVal = dp.get(word) || 1;
            for(let j = 0; j < word.length; j++){
                let pred = word.slice(0, j) + word.slice(j+1);
                if(wArr[i-1].has(pred) && wVal >= (dp.get(pred) || 1)){
                    dp.set(pred, wVal+1);
                    longest = Math.max(longest, wVal+1);
                }
            }
        }
    }
    return longest;
};