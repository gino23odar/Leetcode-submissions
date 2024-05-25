/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function(s, wordDict) {
    let wordSet = new Set(wordDict);
    let res = [];
    
    const backtrack = (s, set, cur, res, idx) =>{
        if(idx == s.length){
            res.push(cur.join(' '));
            return;
        }
        for(let i = idx+1; i < s.length+1; i++){
            //console.log(i)
            let word = s.substring(idx,i);
            if(wordSet.has(word)){
                //console.log(i,word)
                cur.push(word);
                backtrack(s,set,cur,res,i);
                cur.pop();
            }
        }
    }
    
    backtrack(s,wordSet,[],res,0);
    return res;
};